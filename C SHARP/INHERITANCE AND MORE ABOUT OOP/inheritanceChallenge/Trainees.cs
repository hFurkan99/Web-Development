namespace inheritanceChallenge
{
    class Trainees : Employee
    {
        public int WorkingHours { get; set; }
        public int SchoolHours { get; set; }

        public Trainees()
        {
            WorkingHours = 5;
            SchoolHours = 5;
        }

        public Trainees(string firstName, string lastName, int salary, int workingHours, int schoolHours) : base(firstName, lastName, salary)
        {
            WorkingHours = workingHours;
            SchoolHours = schoolHours;
        }


        public void Learn()
        {
            Console.WriteLine(FirstName + " şu anda öğreniyor.");
        }

        public override void Work()
        {
            Console.WriteLine("Benim adım " + FirstName + " " + LastName + ". Günde " + WorkingHours + " saat çalışırken " + SchoolHours + " saatim de okulda geçiyor.");
        }



    }

}