using Elasticsearch.API.DTOs;
using Elasticsearch.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Elasticsearch.API.Controllers
{

    public class GeocodeController : BaseController
    {
        private readonly GeocodeService _geocodeService;
        public GeocodeController(GeocodeService geocodeService)
        {
            _geocodeService = geocodeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return CreateActionResult(await _geocodeService.GetAllAsync());
        }
    }
}
