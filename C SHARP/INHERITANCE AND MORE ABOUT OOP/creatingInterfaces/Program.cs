namespace creatingInterfaces
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Chair officeChair = new Chair("Brown", "Plastic");
            Chair gamingChair = new Chair("Red", "Wood");

            Car demagedCar = new Car(80f, "Blue");

            demagedCar.DestroyablesNearby.Add(officeChair);
            demagedCar.DestroyablesNearby.Add(gamingChair);


            demagedCar.Destroy();

        }
    }
}