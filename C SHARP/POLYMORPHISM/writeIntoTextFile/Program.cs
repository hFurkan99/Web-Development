using System.IO;

namespace writeIntoTextFile
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            //METHOD 1
            string[] lines = { "first line", "second line", "third line" };
            File.WriteAllLines(@"./text.txt", lines);



            //METHOD 2

            string[] highscores = { "550", "270", "160" };

            File.WriteAllLines(@"./highscores.txt", highscores);


            Console.WriteLine("Please give the file name");
            string? fileName = Console.ReadLine();
            Console.WriteLine("Please enter the text for file");
            string? input = Console.ReadLine();

            File.WriteAllText(@"./" + fileName + ".txt", input);


            //METHOD 3
            using (StreamWriter file = new StreamWriter(@"./mytext.txt"))
            {
                foreach (string line in lines)
                {
                    if (line.Contains("third"))
                    {
                        file.WriteLine(line);
                    }
                }
            }

            using (StreamWriter file = new StreamWriter(@"./mytext.txt", true))
            {
                file.WriteLine("Metin dosyasına ekleme yaptım");
            }


        }
    }
}