using Catalog.Core.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Catalog.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseFeature> CourseFeatures { get; set; }


        public override int SaveChanges()
        {
            foreach (var item in ChangeTracker.Entries())
            {
                if (item.Entity is BaseEntity entityReference)
                {
                    switch (item.Entity)
                    {
                        case EntityState.Added:
                        {
                            entityReference.CreatedDate = DateTime.UtcNow;
                            break;
                        }
                        case EntityState.Modified:
                        {
                            entityReference.UpdatedDate = DateTime.UtcNow;
                            break;
                        }
                    }
                }
            }
            return base.SaveChanges();
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {

            foreach (var item in ChangeTracker.Entries())
            {
                if (item.Entity is BaseEntity entityReference)
                {
                    switch (item.State)
                    {
                        case EntityState.Added:
                        {
                            entityReference.CreatedDate = DateTime.UtcNow;
                            break;
                        }
                        case EntityState.Modified:
                        {
                            Entry(entityReference).Property(x => x.CreatedDate).IsModified = false;

                            entityReference.UpdatedDate = DateTime.UtcNow;
                            break;
                        }
                    }
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }
    }
}
