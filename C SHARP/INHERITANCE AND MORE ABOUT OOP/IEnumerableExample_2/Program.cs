namespace IEnumerableExample_2
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            List<int> numberList = new List<int>() { 8, 6, 2 };

            int[] numberArray = new int[] { 5, 12, 17, 9 };

            Console.WriteLine();
            CollectionSum(numberList);
            Console.WriteLine();
            CollectionSum(numberArray);

        }

        static void CollectionSum(IEnumerable<int> anyCollection)
        {
            int sum = 0;


            foreach (int num in anyCollection)
            {
                sum += num;
            }

            Console.WriteLine("Sum is " + sum);
        }
    }
}