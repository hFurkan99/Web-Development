using Catalog.Core.Models;

namespace Catalog.Core.Repositories
{
    public interface ICategoryRepository : IGenericRepository<Category>
    {
        Task<Category?> GetCategoryByIdWithCoursesAsync(int categoryId);
    }
}
