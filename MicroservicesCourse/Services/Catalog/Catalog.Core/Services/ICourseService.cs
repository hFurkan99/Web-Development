using Catalog.Core.DTOs;
using Catalog.Core.Models;

namespace Catalog.Core.Services
{
    public interface ICourseService : IService<Course>
    {
        Task<CustomResponseDto<List<CourseWithCategoryDto>>> GetCoursesWithCategory();
        Task<CustomResponseDto<List<CourseDto>>> GetAllByUserIdAsync(int userId);
        Task<CustomResponseDto<List<CourseDto>>> GetCoursesWithFeatures();

    }
}
