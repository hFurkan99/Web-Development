

namespace Catalog.Core.DTOs
{
    public class CourseUpdateDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public int UserId { get; set; }
        public string? Picture { get; set; }
        public CourseFeatureDto? CourseFeature { get; set; }
        public int CategoryId { get; set; }
    }
}
