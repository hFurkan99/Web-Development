using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Catalog.Core.Repositories;
using Catalog.Core.Services;
using Catalog.Core.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Service.Services
{
    public class CategoryService : Service<Category>, ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
              

        public CategoryService(IGenericRepository<Category> repository, IUnitOfWork unitOfWork, IMapper mapper, ICategoryRepository categoryRepository) : base(repository, unitOfWork)
        {
            _mapper = mapper;
            _categoryRepository = categoryRepository;
        }

        public async Task<CustomResponseDto<CategoryWithCoursesDto>> GetCategoryByIdWithCoursesAsync(int categoryId)
        {
            var category = await _categoryRepository.GetCategoryByIdWithCoursesAsync(categoryId);
            var categoryDto = _mapper.Map<CategoryWithCoursesDto>(category);
            return CustomResponseDto<CategoryWithCoursesDto>.Success(200, categoryDto);
        }
    }
}
