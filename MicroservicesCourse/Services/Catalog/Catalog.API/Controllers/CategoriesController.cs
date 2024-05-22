using Catalog.Core.DTOs;
using Catalog.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Shared.ControllerBases;

namespace Catalog.API.Controllers
{
    public class CategoriesController : CustomBaseController
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            return CreateActionResult(await _categoryService.GetAllAsync());
        }

        [HttpGet]
        public async Task<IActionResult> GetCategoryByIdWithCoursesAsync(int categoryId)
        {
            return CreateActionResult(await _categoryService.GetCategoryByIdWithCoursesAsync(categoryId));
        }

        [HttpPost]
        public async Task<IActionResult> SaveCategory(CategoryCreateDto categoryCreateDto)
        {
            return CreateActionResult(await _categoryService.AddCategoryAsync(categoryCreateDto));
        }

    }
}
