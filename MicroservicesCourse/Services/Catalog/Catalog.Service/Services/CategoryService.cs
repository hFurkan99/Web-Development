using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Catalog.Core.Repositories;
using Catalog.Core.Services;
using Catalog.Core.UnitOfWorks;
using Microsoft.AspNetCore.Http;
using Shared.DTOs;

namespace Catalog.Service.Services
{
    public class CategoryService : Service<Category, CategoryDto>, ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(IGenericRepository<Category> repository, IUnitOfWork unitOfWork, IMapper mapper, ICategoryRepository categoryRepository) : base(repository, unitOfWork, mapper)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<CustomResponseDto<CategoryDto>> AddCategoryAsync(CategoryCreateDto categoryCreateDto)
        {
            var newEntity = _mapper.Map<Category>(categoryCreateDto);
            await _categoryRepository.AddAsync(newEntity);
            await _unitOfWork.CommitAsync();
            var newDto = _mapper.Map<CategoryDto>(newEntity);
            return CustomResponseDto<CategoryDto>.Success(StatusCodes.Status201Created, newDto);
        }

        public async Task<CustomResponseDto<CategoryWithCoursesDto>> GetCategoryByIdWithCoursesAsync(int categoryId)
        {
            var category = await _categoryRepository.GetCategoryByIdWithCoursesAsync(categoryId);
            var categoryDto = _mapper.Map<CategoryWithCoursesDto>(category);
            return CustomResponseDto<CategoryWithCoursesDto>.Success(StatusCodes.Status200OK, categoryDto);
        }
    }
}
