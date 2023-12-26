using System.Collections;

internal class Program
{
    private static void Main(string[] args)
    {
        //1
        int[] numbers = new int[] { 5, 2, 9, 10, 3, 12, 15, 5, 6, 17, 23, 10, 7, 8 };
        
        //2
        var numbers2 = Array.CreateInstance(typeof(int), numbers.Length);
  
        numbers.CopyTo(numbers2, 0);

        Array.Sort(numbers);
        Array.Sort(numbers2);
        Array.Clear(numbers, 2, 2);

      


        //3
        var numbers3 = new ArrayList(numbers);
        numbers3.Sort();


        //for (int i = 0; i < numbers.Length; i++)
        //{
        //    Console.WriteLine("numbers[{0}] = {1}  -  numbers2[{0}] = {2}", 
        //        i, 
        //        numbers[i], 
        //        numbers2.GetValue(i));
        //}

        for (int i = 0; i < numbers2.Length; i++)
        {
            Console.WriteLine($"numbers[{i}] = " + 
                $"{numbers[i], 4}  - " + 
                $"numbers2[{i}] = " +
                $"{numbers2.GetValue(i), 4} " +
                $"numbers3[{i}] = " +
                $"{numbers3[i], 4}"
                );
        }

        Console.WriteLine(Array.IndexOf(numbers, 10));



        Console.ReadKey();
    }
}







