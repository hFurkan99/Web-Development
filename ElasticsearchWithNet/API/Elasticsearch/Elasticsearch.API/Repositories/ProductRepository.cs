using Elasticsearch.API.Models;
using Nest;
using System.Collections.Immutable;

namespace Elasticsearch.API.Repositories
{
    public class ProductRepository
    {
        private readonly ElasticClient _client;
        private const string indexName = "perflogs";
        public ProductRepository(ElasticClient client)
        {
            _client = client;
        }

        public async Task<Product?> SaveAsync(Product newProduct)
        {
            newProduct.Created = DateTime.Now;

            //Id'yi biz verirsek
            var response = await _client.IndexAsync(newProduct, x => x.Index("products").Id(Guid.NewGuid().ToString()));

            //Id ElasticSearch tarafında verilirse
            //var response = await _client.IndexAsync(newProduct, x => x.Index(indexName));


            if (!response.IsValid) return null;

            newProduct.Id = response.Id;
            return newProduct;
        }

        public async Task<IImmutableList<Product>> GetAllAsync()
        {
            var result = await _client.SearchAsync<Product>(s => s.Index(indexName).Query(q => q.MatchAll()));
            return result.Documents.ToImmutableList();
        }

        public async Task<Product?> GetById(string id)
        {
            var response = await _client.GetAsync<Product>(id, x => x.Index(indexName));

            if (!response.IsValid)
                return null;

            return response.Source;
        }
    }
}
