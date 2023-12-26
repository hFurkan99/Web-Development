namespace loopsAverage
{
    internal class Program
    {


        private static void Main(string[] args)
        {
            int sum = 0, score, numOfStudents = 0;
            float average = 0;

            do
            {
                Console.WriteLine("Öğrencinin notunu giriniz(Çıkmak için -1): ");

                if (int.TryParse(Console.ReadLine(), out score) && score <= 100 && score >= 0)
                {
                    sum += score;
                    numOfStudents++;
                }
                else if (score < 0 || score > 100)
                {
                    Console.WriteLine("Lütfen 0 ile 100 arasında bir sayı giriniz!");
                    continue;
                }
                else
                {
                    Console.WriteLine("Girilen not bir tam sayı olmalı");
                    continue;
                }

            } while (score != -1);

            average = (float)sum / (float)numOfStudents;
            Console.WriteLine("{0} öğrencinin notları ortalaması {1}", numOfStudents, average);





        }
    }
}