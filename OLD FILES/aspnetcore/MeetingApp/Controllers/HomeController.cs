using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MeetingApp.Models;

namespace MeetingApp.Controllers;

public class HomeController : Controller
{
   public IActionResult Index(){
      int saat = DateTime.Now.Hour;
   
      // ViewBag.selamlama = saat > 12 ? "İyi Günler":"Günyadın";
      // ViewBag.userName = "Begühan";
      // viewbag ve view data aynı işlev
      ViewData["selamlama"] = saat > 12 ? "İyi Günler":"Günaydın"; 
      int UserCount = Repository.Users.Where(info => info.WillAttend == true).Count(); // katılımcı sayısı hesaplama
      //ViewData["userName"] = "Begühan";

      var Meetinginfo = new Meetinginfo(){
        Id = 1,
        Location = "Ankara, ABC Kongre Merkezi",
        Date = new DateTime(2024, 06, 10, 14, 0, 0),
        NumberOfPeople = UserCount
      };


    return View(Meetinginfo);
   }
}
