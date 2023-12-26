namespace inheritanceChallenge
{
    class Employee
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int Salary { get; set; }

        public Employee()
        {
            FirstName = "Bilinmeyen";
            LastName = "Çalışan";
            Salary = 0;
        }

        public Employee(string firstName, string lastName, int salary)
        {
            FirstName = firstName;
            LastName = lastName;
            Salary = salary;
        }

        public virtual void Work()
        {
            Console.WriteLine("Benim adım " + FirstName + " " + LastName + ". " + Salary + " TL için çalışıyorum.");
        }

        public void Pause()
        {
            Console.WriteLine(FirstName + " çalışmayı bıraktı.");
        }
    }


}