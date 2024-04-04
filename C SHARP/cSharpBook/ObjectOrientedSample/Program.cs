using ObjectOrientedSample.Classes;

namespace ObjectOrientedSample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new("Furkan", "Baltacı", new DateTime(1999, 6, 10), new DateTime(2023, 12, 25), 3403199606293);

            Console.WriteLine($"Ad: {employee.Name}");
            Console.WriteLine($"Soyad: {employee.Surname}");
            Console.WriteLine($"Yaş: {employee.Age(employee.Birthday)}");
            Console.WriteLine($"Doğum Tarihi: {employee.Birthday.ToShortDateString()}");
            Console.WriteLine($"SGK No: {employee.SgkNo}");
            Console.WriteLine($"İşe Giriş Tarihi: {employee.StartDateOfWork.ToShortDateString()}");
            Console.WriteLine($"Vücut Kitle Endeks Durumu");
            Console.WriteLine($"{employee.VKI(1.78f, 99.5f)}");
            Console.WriteLine($"{employee.VKI(1.78m, 99.5m)}");
            Console.WriteLine($"{employee.VKI(1.78d, 99.5d)}");
        }
    }
}
