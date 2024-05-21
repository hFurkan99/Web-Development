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
    public class CourseRepository : GenericRepository<Course>, ICourseRepository
    {
        public CourseRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<List<Course>> GetCoursesByUserIdAsync(int userId)
        {
            return await _context.Courses.Where(x => x.UserId == userId).ToListAsync();
        }

        public async Task<List<Course>> GetCoursesWithCategory()
        {
            return await _context.Courses.Include(x => x.Category).ToListAsync();
        }
    }
}
