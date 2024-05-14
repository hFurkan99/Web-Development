using Elasticsearch.API.Models;
using Nest;
using Newtonsoft.Json.Linq;
using System.Collections.Immutable;
using System.Net;

namespace Elasticsearch.API.Repositories
{
    public class GeocodeRepository
    {
        private readonly ElasticClient _client;
        private const string indexName = "perflogs-15-04-2024";
        public GeocodeRepository(ElasticClient client)
        {
            _client = client;
        }

        public async Task<List<string>> GetAllAsync()
        {
            List<string> queryList = new();
            
            string[] paths = { "/Service/api/v1/Geocode", "/Service/api/v1/Geocode2ext" };

            var searchResponse = await _client.SearchAsync<GeocodeModel>(s => s
                .Index(indexName)
                .Query(q => q
                    .Bool(b => b
                        .Should(sh => sh
                            .Term(t => t
                                .Field("fields.path.keyword")
                                .Value(paths[0])
                                .CaseInsensitive()
                            ),
                            sh => sh
                            .Term(t => t
                                .Field("fields.path.keyword")
                                .Value(paths[1])
                                .CaseInsensitive()
                            )
                        )
                    )
                )
                .Size(10000)
                .Scroll("5m")
            );

            long totalCount = searchResponse.Total;

            // İlk sayfa verilerini al
            
            ListQueries(searchResponse, queryList);

            // Daha fazla veri varsa devam et
            while (searchResponse.IsValid && searchResponse.Hits.Count > 0)
            {
                // Scroll id ile bir sonraki sayfa verilerini al
                searchResponse = await _client.ScrollAsync<GeocodeModel>("5m", searchResponse.ScrollId);

                ListQueries(searchResponse, queryList);
            }

            static void ListQueries(ISearchResponse<GeocodeModel> searchResponse, List<string> queryList)
            {
                foreach (var hit in searchResponse.Hits)
                {
                    if (hit.Source.fields.requestBody == "")
                    {
                        string? requestUrl = hit.Source.fields.requestUrl;
                        string? decodedQueryString = WebUtility.UrlDecode(new Uri(requestUrl).Query);
                        string[] queryParts = decodedQueryString.Split('&');
                        string? queryString = decodedQueryString.Split(new[] { "q=" }, StringSplitOptions.None)[1];
                        if (queryString.Contains("&"))
                        {
                            int indexOfAmpersand = queryString.IndexOf("&");
                            queryString = queryString.Substring(0, indexOfAmpersand);
                        }
                        queryList.Add(queryString);
                    }
                    else
                    {
                        string? queryString = hit.Source.fields.requestBody;

                        JObject jsonObject = JObject.Parse(queryString);
                        string query = (string)jsonObject["query"];

                        if (query != null)
                            queryList.Add(query);
                    }
                }

            }

            await _client.ClearScrollAsync(new ClearScrollRequest(searchResponse.ScrollId));

            return queryList.ToList();
        }
    }
}
