namespace nestedIf
{
    internal class Program
    {

        public static void NestedCheck(int number)
        {
            if (number % 3 == 0)
            {
                Console.WriteLine("Divisible by 3");
            }
            else if (number % 3 != 0 && number % 7 == 0)
            {
                Console.WriteLine("Divisible by 7");
            }
            else
            {
                if (number % 2 == 0)
                {
                    Console.WriteLine("even");
                }
                else
                {
                    Console.WriteLine("Odd");
                }
            }


        }

        private static void Main(string[] args)
        {
            NestedCheck(9);
            NestedCheck(14);
            NestedCheck(21);
            NestedCheck(11);
            NestedCheck(26);

        }
    }
}