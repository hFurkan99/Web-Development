using Catalog.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Core.Repositories
{
    public interface ICourseRepository : IGenericRepository<Course>
    {
        Task<List<Course>> GetCoursesWithCategory();
        Task<List<Course>> GetCoursesByUserIdAsync(int userId);
        Task<List<Course>> GetCoursesWithFeatures();
    }
}
