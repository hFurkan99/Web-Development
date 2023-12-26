namespace parse
{
    internal class Program
    {
        private static void Main(string[] args)
        {

            string stringForFloat = "0.85"; // datatype should be float
            string stringForInt = "12345"; // datatype should be int

            float myFloatString = float.Parse(stringForFloat);
            int myIntString = int.Parse(stringForInt);

            Console.WriteLine(myIntString + " " + myFloatString + "\n");

            float sum = myFloatString + myIntString;

            Console.WriteLine("{0} + {1} = {2}", myFloatString, myIntString, sum);


        }
    }
}