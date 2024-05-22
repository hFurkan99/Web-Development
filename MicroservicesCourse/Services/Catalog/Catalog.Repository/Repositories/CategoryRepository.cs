using Catalog.Core.Models;
using Catalog.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Repository.Repositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Category?> GetCategoryByIdWithCoursesAsync(int categoryId)
        {
            return await _context.Categories.Include(x => x.Courses).Where(x => x.Id == categoryId).SingleOrDefaultAsync();
        }
    }
}
