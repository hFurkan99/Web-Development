using System.ComponentModel.DataAnnotations;

namespace formsApp.Models
{

    public class Product
    {
            [Display(Name = "Ürün ID")]
            public int ProductId { get; set; }

            [Display(Name = "Ürün Adı")]
            public string? Name { get; set; }

            [Display(Name ="Ürün Fiyatı")]
            public decimal Price { get; set; }

            [Display(Name = "Ürün Görseli")]
            public string? Image { get; set; }

            public bool IsActive { get; set; }

            public int CategoryId { get; set; }

    }

}