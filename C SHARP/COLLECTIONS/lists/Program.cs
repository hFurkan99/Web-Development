namespace lists
{
    internal class Program
    {

        public static List<int> Solution()
        {
            var numbers = new List<int>();
            for (int i = 100; i <= 170; i++)
            {
                if (i % 2 == 0)
                {
                    numbers.Add(i);
                }

            }

            return numbers;


        }
        private static void Main(string[] args)
        {

            var list = new List<int>();
            list = Solution();
            foreach (var item in list)
            {
                Console.WriteLine(item);
            }


        }
    }
}