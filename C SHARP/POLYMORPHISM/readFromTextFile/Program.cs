using System.IO;

namespace readFromTextFile
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            //Example 1 - reading text
            string text = File.ReadAllText(@"./text.txt");

            Console.WriteLine("Textfile contains following text:\n" + text);


            //Example 2 - reading lines
            string[] lines = File.ReadAllLines(@"./text.txt");
            Console.WriteLine("Contents of text.txt = ");
            foreach (string line in lines)
            {
                Console.WriteLine("\t" + line);
            }
        }
    }
}