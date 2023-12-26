namespace ifElse
{
    internal class Program
    {

        public static void Check(int number)
        {
            if (number % 2 == 0)
            {
                Console.WriteLine("Even");
            }
            else
            {
                Console.WriteLine("Odd");
            }
        }
        private static void Main(string[] args)
        {
            Check(8);
            Check(7);
            Check(0);
            Check(157);
        }
    }
}