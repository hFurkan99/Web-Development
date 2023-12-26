namespace breakContinue
{
    internal class Program
    {

        public static void Run()
        {
            int i = -10;

            while (true)
            {

                // TODO
                if (i % 3 == 0)
                {
                    i++;
                    continue;
                }
                else if (i == 10)
                {
                    break;
                }
                if (i == 11)
                {
                    Console.WriteLine(" FINAL BREAK REACHED! This should not happen!");
                    break;
                }
                Console.WriteLine(i++);
            }
        }
        private static void Main(string[] args)
        {
            Run();
        }
    }
}