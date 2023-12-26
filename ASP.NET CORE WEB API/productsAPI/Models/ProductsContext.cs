using Microsoft.EntityFrameworkCore;

namespace productsAPI.Models
{
    public class ProductsContext : DbContext
    {

        public DbSet<Product> Products { get; set; }


        public ProductsContext(DbContextOptions<ProductsContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(new Product() { ProductID = 1, ProductName = "Telefon", Price = 20000, IsActive = true });
            modelBuilder.Entity<Product>().HasData(new Product() { ProductID = 2, ProductName = "Klavye", Price = 3500, IsActive = true });
            modelBuilder.Entity<Product>().HasData(new Product() { ProductID = 3, ProductName = "Bilgisayar", Price = 45000, IsActive = false });
            modelBuilder.Entity<Product>().HasData(new Product() { ProductID = 4, ProductName = "Oyuncu Koltuğu", Price = 12000, IsActive = true });
            modelBuilder.Entity<Product>().HasData(new Product() { ProductID = 5, ProductName = "Kulaklık", Price = 2500, IsActive = true });
        }
    }
}