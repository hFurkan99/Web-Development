namespace IEnumeratorAndIEnumerable
{
    class Dog
    {
        public string? Name { get; set; }

        public bool IsNaughtyDog { get; set; }

        public Dog(string name, bool isNaughtyDog)
        {
            Name = name;
            IsNaughtyDog = isNaughtyDog;
        }

        public void GiveTreat(int numberofTreats)
        {
            Console.WriteLine("Dog: " + Name + " said wuof " + numberofTreats + " times!");
        }


    }
}