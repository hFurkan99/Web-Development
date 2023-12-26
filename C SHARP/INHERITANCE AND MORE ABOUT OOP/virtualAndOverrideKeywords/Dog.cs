namespace virtualAndOverrideKeywords
{
    class Dog : Animal
    {

        public bool IsHappy { get; set; }
        public Dog(string name, int age) : base(name, age)
        {
            IsHappy = true;
        }

        public override void Eat()
        {
            // to call the Eat method from our base class(Animal) we use the keyword "base"
            base.Eat();
        }

        public override void MakeSound()
        {
            //since every animal will make a totally different sound
            //each animal will implement their own version of MakeSound
            Console.WriteLine("Hav hav!");
        }

        public override void Play()
        {
            //check if the dog is happy if yes call the Play method from the base class
            if (IsHappy)
            {
                base.Play();
            }
        }

    }

}