namespace polymorphicParameters
{
    class Car
    {
        public int HP { get; set; }
        public string? Color { get; set; }

        // has a relationship
        protected CarIdInfo carIdInfo = new CarIdInfo();

        public void SerCarIdInfo(int idNum, string owner)
        {
            carIdInfo.IDNum = idNum;
            carIdInfo.Owner = owner;
        }

        public void GetCarIdInfo()
        {
            Console.WriteLine("The car has the ID of " + carIdInfo.IDNum + " and is owned by " + carIdInfo.Owner);
        }

        public Car(int hp, string color)
        {
            HP = hp;
            Color = color;
        }

        public void ShowDetails()
        {
            Console.WriteLine("HP: " + HP + "   Color: " + Color);
        }

        public virtual void Repair()
        {
            Console.WriteLine("Car was repaired!");
        }



    }
}