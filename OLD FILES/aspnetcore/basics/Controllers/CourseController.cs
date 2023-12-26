using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using basics.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace basics.Controllers;

public class CourseController : Controller
{
    public IActionResult Index()
    {
        var kurs = new Course();
        kurs.id = 1;
        kurs.title = "Zaha";
        kurs.description = "Dünya klası bir süperstar...";
        kurs.image = "1.jpg";
        return View(kurs);   // eger view dosyasının course dosyası altında CourseList adında (yani contoller altındaki action sınıfının isminden başka bir isimde)  bir cshtml sayfası oluşturup burdan oraya ulaşmak istersek döndürmek istediğimiz cshmtl sayfasını view fonksiyonu içine tırnak içinde yazarız
        //return View("CourseList");
        // eğer farklı bir dosya ismi olan (CourseList) ile yukardaki sınıfın nesnesinin elemanlarını cshtml sayfasına göndermek istiyorsak
        // retun View("CourseList", kurslar);
    }

    public IActionResult Details(int? id)
    {
        if (id==null)
        {   
            Redirect("/course/list");
        }
       var kurs = Repository.GetById(id);
        return View(kurs);
    }

    public IActionResult List()
    {
        return View(Repository.Courses);
    }
}


