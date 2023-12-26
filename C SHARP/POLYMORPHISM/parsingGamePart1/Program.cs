namespace parsingGamePart1
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("./input.txt");


            using (StreamWriter file = new StreamWriter("./output.txt"))
                foreach (string line in lines)
                {
                    if (line.Contains("split"))
                    {
                        string[] outputWords = line.Split();
                        file.Write(outputWords[4] + " ");
                    }

                }
        }
    }
}