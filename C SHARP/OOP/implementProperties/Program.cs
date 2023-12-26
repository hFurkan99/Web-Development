namespace implementProperties
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Book kitap = new Book();
            Book kitap2 = new Book();

            kitap.Title = "Termodinamik";
            kitap.Pages = 256;

            kitap2.Title = "";
            kitap2.Pages = -10;

            Console.WriteLine(kitap.Title + " " + kitap.Pages);
            Console.WriteLine(kitap2.Title + " " + kitap2.Pages);




        }
    }
}