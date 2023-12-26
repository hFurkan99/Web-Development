namespace constructors
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Phone xiaomi = new Phone();
            Phone samsung = new Phone("Samsung", "Galaxy M21");
            Phone apple = new Phone("Apple", "iPhone 15", "22/09/2023");

            xiaomi.Introduce();
            samsung.Introduce();
            apple.Introduce();
        }
    }
}