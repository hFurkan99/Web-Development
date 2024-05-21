
namespace Catalog.Core.DTOs
{
    public class CategoryWithCoursesDto : CategoryDto
    {
        public  List<CourseDto>? Courses { get; set; }
    }
}
