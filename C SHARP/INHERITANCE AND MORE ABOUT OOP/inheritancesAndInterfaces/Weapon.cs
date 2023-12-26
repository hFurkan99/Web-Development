namespace inheritancesAndInterfaces
{
    class Weapon
    {
        public string? Name { get; set; }


        public Weapon() { }
        public Weapon(string name)
        {
            Name = name;
        }

        public void Label()
        {
            Console.WriteLine("This is " + Name + "!");
        }
    }
}