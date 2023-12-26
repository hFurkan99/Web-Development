namespace stringMethods2
{
    internal class Program
    {
        static string? word, name, lastName, fullName;
        static char character;
        static int index;
        private static void Main(string[] args)
        {
            Console.WriteLine("Enter a string here");
            word = Console.ReadLine();

            Console.WriteLine("Enter the character to search");
            character = Console.ReadLine()[0];

            index = word.IndexOf(character);
            Console.WriteLine("Index of character {0} in string is {1}", character, index);

            Console.WriteLine("Enter your first name");
            name = Console.ReadLine();
            Console.WriteLine("Enter your last name");
            lastName = Console.ReadLine();

            fullName = string.Concat(name, " ", lastName);
            //fullName = String.Format("Fullname: {0} {1}", name, lastName);
            Console.WriteLine("Fulname: {0}", fullName);




        }
    }
}