using Elasticsearch.API.Models;
using Nest;

namespace Elasticsearch.API.Repositories
{
    public class ProductRepository
    {
        private readonly ElasticClient _client;
        public ProductRepository(ElasticClient client)
        {
            _client = client;
        }

        public async Task<Product?> SaveAsync(Product newProduct)
        {
            newProduct.Created = DateTime.Now;

            //Id'yi biz verirsek
            //var response = await _client.IndexAsync(newProduct, x => x.Index("products").Id(Guid.NewGuid().ToString()));
            
            //Id ElasticSearch tarafında verilirse
            var response = await _client.IndexAsync(newProduct, x => x.Index("products"));


            if (!response.IsValid) return null;

            newProduct.Id = response.Id;
            return newProduct;
        }
    }
}
