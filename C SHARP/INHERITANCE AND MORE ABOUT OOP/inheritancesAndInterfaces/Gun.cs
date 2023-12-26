namespace inheritancesAndInterfaces
{

    class Gun : Weapon, IShootable
    {

        public Gun()
        {
            Name = "Gun";
        }

        public void Shoot()
        {
            Console.WriteLine("Bang!");
        }
    }
}