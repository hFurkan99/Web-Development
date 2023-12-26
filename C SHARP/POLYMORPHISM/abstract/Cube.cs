using System.Reflection.Metadata.Ecma335;

namespace Abstract
{
    class Cube : Shape
    {
        public int Length { get; set; }

        public Cube(int length)
        {
            Name = "Cube";
            Length = length;
        }

        public override double Volume()
        {
            return Math.Pow(Length, 3);
        }

        public override void GetInfo()
        {
            base.GetInfo();
            Console.WriteLine("The cube has a length of " + Length + " and has a volume of " + Volume());
        }
    }
}