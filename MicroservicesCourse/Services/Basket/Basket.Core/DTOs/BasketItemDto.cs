
namespace Basket.Core.DTOs
{
    public class BasketItemDto
    {
        public int Quantity { get; set; }
        public int CourseId { get; set; }
        public string? CourseName { get; set; }
        public decimal Price { get; set; }
    }
}
