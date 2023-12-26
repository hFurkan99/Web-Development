namespace inheritanceChallenge
{
    class Boss : Employee
    {
        public string? CompanyCar { get; set; }


        public Boss()
        {
            CompanyCar = "Fiat";
        }

        public Boss(string firstName, string lastName, int salary, string companyCar) : base(firstName, lastName, salary)
        {
            CompanyCar = companyCar;
        }



        public void Lead()
        {
            Console.WriteLine(CompanyCar + " marka bir arabam var ve şirketi ben yönetiyorum.");
        }
    }

}