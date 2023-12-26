namespace inheritanceChallenge
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Employee employee1 = new Employee();
            employee1.Work();

            Employee employee2 = new Employee("Mehmet", "Türkoğlu", 12000);
            employee2.Work();

            employee1.Pause();
            employee2.Pause();

            Trainees trainee1 = new Trainees();
            trainee1.Work();

            Trainees trainee2 = new Trainees("Furkan", "Baltacı", 6000, 7, 4);
            trainee2.Work();
            trainee2.Pause();
            trainee2.Learn();

            Boss boss1 = new Boss();
            boss1.Work();
            boss1.Pause();
            boss1.Lead();

            Boss boss2 = new Boss("Yusuf", "Baltacı", 53000, "BMW");
            boss2.Work();
            boss2.Pause();
            boss2.Lead();

        }
    }
}