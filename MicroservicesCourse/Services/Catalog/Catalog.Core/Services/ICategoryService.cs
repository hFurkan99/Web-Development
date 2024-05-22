using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Shared.DTOs;

namespace Catalog.Core.Services
{
    public interface ICategoryService : IService<Category, CategoryDto>
    {
        Task<CustomResponseDto<CategoryWithCoursesDto>> GetCategoryByIdWithCoursesAsync(int categoryId);
        Task<CustomResponseDto<CategoryDto>> AddCategoryAsync(CategoryCreateDto categoryCreateDto);
    }
}
