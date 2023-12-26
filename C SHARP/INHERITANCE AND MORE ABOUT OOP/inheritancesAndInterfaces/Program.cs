namespace inheritancesAndInterfaces
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Gun pist = new Gun();

            pist.Label();
            pist.Shoot();

            if (pist is IShootable && pist is Weapon)
                System.Console.WriteLine("Yes, it is my parents.");
        }
    }
}