using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using formsApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace formsApp.Controllers;

public class HomeController : Controller
{
    
    public HomeController()
    {

    }

    public IActionResult Index(string searchString, string category)
    {   
        var products = Repository.Products;

        if (!String.IsNullOrEmpty(searchString))
        {   
            ViewBag.searchString = searchString;
            products = products.Where(p => p.Name.ToLower().Contains(searchString)).ToList();
        }

        if (!string.IsNullOrEmpty(category) && category != "0")
        {   
            products = products.Where(p => p.CategoryId == int.Parse(category)).ToList();
        }

        ViewBag.Categories = new SelectList(Repository.Categories,"CategoryId", "Name");
        return View(products);
    }

    public IActionResult Privacy()
    {
        return View();
    }
}
