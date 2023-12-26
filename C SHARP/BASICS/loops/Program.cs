using System.Diagnostics.Metrics;

namespace loops
{
    internal class Program
    {

        public static void ForLoop()
        {
            for (int i = -3; i <= 3; i++)
            {
                Console.WriteLine(i);
            }
        }

        public static void WhileLoop()
        {
            int i = 3;
            while (i >= -3)
            {
                Console.WriteLine(i);
                i--;
            }
        }

        public static void Run()
        {
            WhileLoop();
            ForLoop();
        }
        private static void Main(string[] args)
        {
            Run();
        }
    }
}