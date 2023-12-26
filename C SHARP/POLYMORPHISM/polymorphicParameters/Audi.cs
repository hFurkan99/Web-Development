namespace polymorphicParameters
{
    class Audi : Car
    {
        public string? Model { get; set; }
        private string? Brand = "Audi";

        public Audi(string model, int hp, string color) : base(hp, color)
        {
            Model = model;
        }



        public new void ShowDetails()
        {
            Console.WriteLine("Brand: " + Brand + "HP: " + HP + "   Color: " + Color);
        }

        public override void Repair()
        {
            Console.WriteLine("The Audi " + Model + " was repaired");
        }

    }
}