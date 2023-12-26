namespace arrays_foreach
{
    internal class Program
    {
        public static void GetOdd(int[] Array)
        {
            // TODO
            foreach (int item in Array)
            {
                if (item % 2 != 0)
                {
                    Console.WriteLine(item);
                }
            }
        }

        public static void GetEven(int[] Array)
        {
            // TODO
            for (int i = 0; i < Array.Length; i++)
            {
                if (Array[i] % 2 == 0)
                {
                    Console.WriteLine(Array[i]);
                }
            }
        }

        public static void Run()
        {
            int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            GetOdd(array);
            GetEven(array);

        }
        private static void Main(string[] args)
        {
            Run();
        }
    }
}