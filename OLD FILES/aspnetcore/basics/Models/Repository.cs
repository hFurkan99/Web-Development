namespace basics.Models;

public class Repository
{

    private static readonly List<Course> _courses = new();

    static Repository()
    {
        _courses = new List<Course>()
        {
            new Course() { id = 1, title = "Zaha", description = "Zaha'nın Galatasaray formasıyla attığı ilk gol sonrası gol sevinci", image ="1.jpg", Tags = new string[] {"galatasaray","zaha"}, isActive = true, isHome = true
            },
            new Course() { id = 2, title = "Mertens", description = "Mertens'ten harika bir orta", image = "2.jpg", Tags = new string[] {"galatasaray","mertens"}, isActive = false, isHome = true},
            new Course() { id = 3, title = "Galatasaray", description = "Galatasaray takım fotoğrafı", image = "3.jpg", Tags = new string[] {"galatasaray","takım"}, isActive = true, isHome = false},
        };
    }

    public static List<Course> Courses
    {
        get
        {
            return _courses;
        }
    }

    public static Course? GetById(int? Id){
        return _courses.FirstOrDefault(c => c.id == Id);
    }

}

