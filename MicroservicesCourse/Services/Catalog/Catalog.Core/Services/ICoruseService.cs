using Catalog.Core.DTOs;
using Catalog.Core.Models;

namespace Catalog.Core.Services
{
    public interface ICoruseService : IService<Course>
    {
        Task<CustomResponseDto<List<CourseWithCategoryDto>>> GetCoursesWithCategory();
        Task<List<Course>> GetAllByUserIdAsync();
    }
}
