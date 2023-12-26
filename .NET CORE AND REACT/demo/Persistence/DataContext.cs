using demo.Domain;
using Microsoft.EntityFrameworkCore;

namespace demo.Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<Deneme> Denemeler { get; set; }
    }
}
