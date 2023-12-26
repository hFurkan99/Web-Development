namespace ternaryOperator
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            int temperature;
            string sentence;

            Console.WriteLine("Hava sıcaklığını giriniz: ");

            sentence = int.TryParse(Console.ReadLine(), out temperature) == false ? "Not a valid Temperature" : (temperature <= 15 ? "it's too cold here" : (temperature <= 28 ? "it is ok" : "it is hot here"));

            Console.WriteLine(sentence);
        }
    }
}