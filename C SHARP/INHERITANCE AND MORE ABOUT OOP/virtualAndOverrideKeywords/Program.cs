namespace virtualAndOverrideKeywords
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Dog myDog = new Dog("Pulsar", 7);
            Console.WriteLine(myDog.Name + " is " + myDog.Age + " years old.");
            myDog.MakeSound();
            myDog.Play();
            myDog.Eat();
        }
    }
}