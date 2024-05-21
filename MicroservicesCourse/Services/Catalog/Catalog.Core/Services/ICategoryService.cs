using Catalog.Core.DTOs;
using Catalog.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Core.Services
{
    public interface ICategoryService : IService<Category>
    {
        public Task<CustomResponseDto<CategoryWithCoursesDto>> GetCategoryByIdWithCoursesAsync(int categoryId);
    }
}
