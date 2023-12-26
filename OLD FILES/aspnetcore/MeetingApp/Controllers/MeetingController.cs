

using MeetingApp.Models;
using Microsoft.AspNetCore.Mvc;


namespace MeetingApp.Controllers{

    public class MeetingController : Controller{

       
        public IActionResult Apply(){
            return View();
        }

        [HttpPost]
        public IActionResult Apply(UserInfo Model){
            //database list kaydı
            if(ModelState.IsValid){
            Repository.CreateUser(Model);
            ViewBag.UserCount = Repository.Users.Where(info => info.WillAttend == true).Count();
            return View("Thanks", Model);
            }
            else{
                return View(Model);
            }
        }

        public IActionResult List(){
            
            return View(Repository.Users);
        }


// meeting/details/2
        public IActionResult Details(int id){

            return View(Repository.GetById(id));
        }
    }

}