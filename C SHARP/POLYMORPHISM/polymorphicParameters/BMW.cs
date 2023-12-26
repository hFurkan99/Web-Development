namespace polymorphicParameters
{
    class BMW : Car
    {
        public string? Model { get; set; }
        private string? Brand = "BMW";

        public BMW(string model, int hp, string color) : base(hp, color)
        {
            Model = model;

        }



        public new void ShowDetails()
        {
            Console.WriteLine("Brand: " + Brand + " HP: " + HP + "   Color: " + Color);
        }

        public override void Repair()
        {
            Console.WriteLine("The BMW " + Model + " was repaired");
        }




    }
}