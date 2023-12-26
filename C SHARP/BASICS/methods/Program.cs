
namespace methods
{
    public class Methods
    {
        // Place for your methods
        public static string LowUpper(string word)
        {
            string lowerCase = word.ToLower();
            string upperCase = word.ToUpper();
            string merge = string.Concat(lowerCase, upperCase);
            return merge;

        }
        public static void Count(string word)
        {
            int charNumber = word.Length;
            Console.WriteLine("The amount of characters: {0}", charNumber);

        }

        private static void Main(string[] args)
        {
            // We encourage you to test your code with different strings,
            // but don't forget to put the default string back at the end of your testing.
            string s = "HeY ThErE !";

            /// Change nothing down here 
            s = LowUpper(s);
            Console.WriteLine(s);
            Count(s);
        }
    }
}