using System.Text.Json;
using Map.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Map.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PolygonController : ControllerBase
    {
        private const string JsonFilePath = "polygons.json";

        [HttpPost]
        [Route("SavePolygon")]
        public IActionResult SavePolygonWithMetadata([FromBody] Polygon polygonWithMetadata)
        {
            try
            {
                // JSON dosyasına poligon ve metadata verilerini kaydet
                var existingData = new List<Polygon>();
                if (System.IO.File.Exists(JsonFilePath))
                {
                    var json = System.IO.File.ReadAllText(JsonFilePath);
                    existingData = JsonSerializer.Deserialize<List<Polygon>>(json);
                }

                existingData.Add(polygonWithMetadata);

                var updatedJson = JsonSerializer.Serialize(existingData);
                System.IO.File.WriteAllText(JsonFilePath, updatedJson);

                return Ok(new { Message = "Veri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = $"Hata oluştu: {ex.Message}" });
            }
        }

        [HttpGet]
        [Route("GetPolygons")]
        public IActionResult GetPolygonsWithMetadata()
        {
            try
            {
                // JSON dosyasından poligon ve metadata verilerini oku
                if (System.IO.File.Exists(JsonFilePath))
                {
                    var json = System.IO.File.ReadAllText(JsonFilePath);
                    var polygonsWithMetadata = JsonSerializer.Deserialize<List<Polygon>>(json);

                    return Ok(new { PolygonsWithMetadata = polygonsWithMetadata });
                }

                return NotFound(new { Message = "Veri bulunamadı." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = $"Hata oluştu: {ex.Message}" });
            }
        }
    }
}
