

namespace ConsoleApp1;

internal class Program
{
    static void Main(string[] args)
    {
        ArgumentNullException.ThrowIfNull(args);

        int result = Sum(2500, 1500);
        Console.WriteLine(result);
    }
    private static int Sum(int v1, int v2) => v1 + v2;

}
