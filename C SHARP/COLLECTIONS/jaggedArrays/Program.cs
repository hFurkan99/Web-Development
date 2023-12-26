using System.Security.Cryptography.X509Certificates;

namespace jaggedArrays
{
    internal class Program
    {


        public static void Introduce(string name1, string name2)
        {
            Console.WriteLine("Merhaba {0}, {1} ile tanışmanı istiyorum", name1, name2);
        }
        private static void Main(string[] args)
        {

            string[][] jaggedArray = new string[][]
            {
                 new string[] {"Ahmet","Ali"},
                 new string[] {"Emre", "Merve"},
                 new string[] {"Sude", "Alperen"}
            };

            Introduce(jaggedArray[0][1], jaggedArray[1][1]);
            Introduce(jaggedArray[1][0], jaggedArray[0][1]);
            Introduce(jaggedArray[2][0], jaggedArray[1][1]);

        }
    }
}






