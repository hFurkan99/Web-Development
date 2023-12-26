internal class Program
{
    private static void Main(string[] args)
    {
        string? name;
        string? lastName;

        Console.WriteLine("Please enter your name and press enter");
        name = Console.ReadLine();
        Console.WriteLine("Please enter your last name and press enter");
        lastName = Console.ReadLine();

        string fullname = name + " " + lastName;

        Console.WriteLine(fullname.ToUpper());

        string myNameLowerCase = String.Format("Lower Case : {0}", fullname.ToLower());
        Console.WriteLine(myNameLowerCase);

        Console.WriteLine(fullname.Trim());
        Console.WriteLine(fullname.Substring(3, 8));


    }
}
