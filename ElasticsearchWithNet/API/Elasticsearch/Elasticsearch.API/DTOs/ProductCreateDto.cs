using Elasticsearch.API.Enums;
using Elasticsearch.API.Models;

namespace Elasticsearch.API.DTOs
{
    public record ProductCreateDto(string Name, decimal Price, int Stock, ProductFeatureDto Feature)
    {

        public Product CreateProduct()
        {
            int colorValue = 1; // Default value in case Feature.Color is null or not a valid integer string
            if (Feature.Color != null)
            {
                int.TryParse(Feature.Color, out colorValue);
            }

            return new Product
            {
                Name = Name,
                Price = Price,
                Stock = Stock,
                Feature = new ProductFeature()
                {
                    Width = Feature.Width,
                    Height = Feature.Height,
                    Color = (EColor)colorValue,
                }
            };
        }
    }
}
