namespace polymorphicParameters
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var cars = new List<Car>()
            {
                new BMW("M3", 450, "Blue"),
                new Audi("A4", 300, "Red")
            };

            foreach (var car in cars)
            {
                car.Repair();
            }

            Car bmwZ3 = new BMW("Z3", 250, "Black");
            Car audiA3 = new Audi("A3", 200, "Green");
            bmwZ3.ShowDetails();
            audiA3.ShowDetails();

            bmwZ3.SerCarIdInfo(10, "Furkan");
            audiA3.SerCarIdInfo(11, "Alperen");
            bmwZ3.GetCarIdInfo();
            audiA3.GetCarIdInfo();





            BMW bmwM5 = new BMW("M5", 430, "White");
            bmwM5.ShowDetails();

            bmwM5.GetCarIdInfo();

            Car carB = (Car)bmwM5;
            carB.ShowDetails();
        }
    }
}