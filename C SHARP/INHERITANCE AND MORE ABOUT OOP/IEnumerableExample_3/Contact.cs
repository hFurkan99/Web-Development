namespace IEnumerableExample_3
{
    class Contact
    {
        public string? Name { get; set; }
        public string? Number { get; set; }

        public Contact(string name, string number)
        {
            Name = name;
            Number = number;
        }

        public void Call()
        {
            Console.WriteLine("Calling to " + Name + ".Phone number is " + Number);
        }

    }
}