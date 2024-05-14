using Elasticsearch.API.DTOs;
using Elasticsearch.API.Models;
using Elasticsearch.API.Repositories;
using System.Net;

namespace Elasticsearch.API.Services
{
    public class GeocodeService
    {
        private readonly GeocodeRepository _geocodeRepository;

        public GeocodeService(GeocodeRepository geocodeRepository)
        {
            _geocodeRepository = geocodeRepository;
        }

        public async Task<ResponseDto<List<GeocodeModel>>> GetAllAsync()
        {
            var queries = await _geocodeRepository.GetAllAsync();
            var queryList = new List<GeocodeModel>();

            //foreach (var query in queries)
            //{
            //    queryList.Add(new GeocodeModel { message= query.message });
            //}
            return ResponseDto<List<GeocodeModel>>.Success(queryList, HttpStatusCode.OK);
        }
    }
}
