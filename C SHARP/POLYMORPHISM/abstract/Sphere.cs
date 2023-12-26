namespace Abstract
{
    class Sphere : Shape
    {
        public double Radius { get; set; }

        public Sphere(double radius)
        {
            Name = "Sphere";
            Radius = radius;
        }

        public override double Volume()
        {
            return (4 * Math.PI * Math.Pow(Radius, 3)) / 3;
        }

        public override void GetInfo()
        {
            base.GetInfo();
            Console.WriteLine("The sphere has a radius of " + Radius + " and has a volume of " + Volume());

        }
    }
}