namespace dictionaryPractice
{
    internal class Program
    {

        public static Dictionary<int, string> dictionary = new Dictionary<int, string>
            {
                {0, "zero"},
                {1, "one"},
                {2, "two"},
                {3, "three"},
                {4, "four"},
                {5, "five"}
            };

        public static string Convert(int i)
        {
            // TODO
            int key = i;
            if (dictionary.ContainsKey(key))
            {
                Console.WriteLine(dictionary[key]);
                return dictionary[key].ToString();
            }
            else
            {
                Console.WriteLine("nope");
                return "nope";
            }
        }
        private static void Main(string[] args)
        {


            Convert(0);
            Convert(2);
            Convert(6);
            Convert(4);

        }
    }
}