using Microsoft.EntityFrameworkCore;
using Movies.Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Movie> Movies { get; set; }
    }
}
