using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Shared.DTOs;

namespace Catalog.Core.Services
{
    public interface ICourseService : IService<Course, CourseDto>
    {
        Task<CustomResponseDto<List<CourseWithCategoryDto>>> GetCoursesWithCategory();
        Task<CustomResponseDto<List<CourseDto>>> GetAllByUserIdAsync(int userId);
        Task<CustomResponseDto<List<CourseDto>>> GetCoursesWithFeatures();
        Task<CustomResponseDto<NoContentDto>> UpdateCourseAsync(CourseUpdateDto dto);
        Task<CustomResponseDto<CourseDto>> AddCourseAsync(CourseCreateDto dto);

    }
}
