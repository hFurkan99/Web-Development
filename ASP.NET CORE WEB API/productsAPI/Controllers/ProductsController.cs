using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using productsAPI.DTO;
using productsAPI.Models;

namespace productsAPI.Controllers;

// localhost:3000/api/products
[ApiController]
[Route("api/[controller]")]  // controller = products 
public class ProductsController : ControllerBase
{

    private readonly ProductsContext _context;

    public ProductsController(ProductsContext context)
    {
        _context = context;
    }



    //localhost:3000/api/products  => GET
    //Task, asenkron bir işi temsil eder ve işin başlatılması, sonucunun elde edilmesi veya hataların işlenmesi gibi işlemleri yönetmek için kullanılır.
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        // Where sayesinde akitf olan ürünler üzerinden seçim yapacağız
        //Select ile kullanıcının görmesini istediğimiz özellikleri seçtik 
        var products = await _context.Products.Where(i => i.IsActive == true).Select(p => ProductToDTO(p)).ToListAsync();

        return Ok(products);
    }


    [Authorize] // Kullanıcı giriş yaptıktan sonra ürün görüntülesin
    //localhost:3000/api/products/id(1, 2, 3..)  => GET
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int? id)
    {

        if (id == null)
        {
            return NotFound();
        }

        var product = await _context.Products.Where(i => i.ProductID == id).Select(p => ProductToDTO(p)).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        return Ok(product);
    }


    [HttpPost]
    public async Task<IActionResult> CreateProduct(Product entity)
    {
        _context.Products.Add(entity);
        await _context.SaveChangesAsync();

        // 201 statuscode
        return CreatedAtAction(nameof(GetProduct), new { id = entity.ProductID }, entity);
        //Response headers
        //location: localhost:3000/api/products/id
    }


    //localhost:3000/api/products/id(1, 2, 3..)  => PUT
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, Product entity)
    {
        if (id != entity.ProductID)
        {
            return BadRequest();
        }

        var product = await _context.Products.FirstOrDefaultAsync(i => i.ProductID == id);

        if (product == null)
        {
            return NotFound();
        }

        product.ProductName = entity.ProductName;
        product.Price = entity.Price;
        product.IsActive = entity.IsActive;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception)
        {
            return NotFound();
        }
        // Her şey normal
        return NoContent();
        //Geriye değer döndürmez
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int? id)
    {

        if (id == null)
        {
            return NotFound();
        }

        var product = await _context.Products.FirstOrDefaultAsync(i => i.ProductID == id);

        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception)
        {
            return NotFound();
        }

        return NoContent();
    }
    private static ProductDTO ProductToDTO(Product p)
    {

        var entity = new ProductDTO();

        if (p != null)
        {
            entity.ProductID = p.ProductID;
            entity.ProductName = p.ProductName;
            entity.Price = p.Price;
        }
        return entity;


    }
}