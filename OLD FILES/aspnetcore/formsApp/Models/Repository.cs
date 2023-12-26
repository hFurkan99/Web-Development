namespace formsApp.Models
{
    public class Repository
    {

        private static readonly List<Product> _products = new();
        private static readonly List<Category> _categories = new();

        static Repository()
        {
            _categories.Add(new Category{ CategoryId = 1, Name = "Telefon"});
            _categories.Add(new Category{CategoryId = 2, Name = "Bilgisayar"});
            _categories.Add(new Category{CategoryId = 3, Name = "Tablet"});        

            _products.Add(new Product{ProductId = 1, Name = "iphone 14", Price = 40000, IsActive = true, Image = "1.jpg", CategoryId = 1});
            _products.Add(new Product{ProductId = 2, Name = "iphone 15", Price = 50000, IsActive = true, Image = "2.jpg", CategoryId = 1});
            _products.Add(new Product{ProductId = 2, Name = "iphone 16", Price = 60000, IsActive = true, Image = "3.jpg", CategoryId = 1});
            _products.Add(new Product{ProductId = 2, Name = "iphone 17", Price = 70000, IsActive = true, Image = "4.jpg", CategoryId = 1});

            _products.Add(new Product{ProductId = 2, Name = "Mackbook Air", Price = 80000, IsActive = true, Image = "5.jpg", CategoryId = 2});
            _products.Add(new Product{ProductId = 2, Name = "Mackbook Pro", Price = 90000, IsActive = true, Image = "6.jpg", CategoryId = 2});

            _products.Add(new Product{ProductId = 2, Name = "iPad Pro", Price = 15000, IsActive = true, Image = "7.jpg", CategoryId = 3});
            _products.Add(new Product{ProductId = 2, Name = "Samsung Tab S6", Price = 10000, IsActive = true, Image = "8.jpg", CategoryId = 3});



        }

        public static List<Product> Products
        {
            get
            {
                return _products;
            }
        }

        public static List<Category> Categories
        {
            get
            {
                return _categories;
            }
        }
    }
}