using ObjectOrientedSample.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientedSample.Classes
{
    public class Employee : Person, IEmployee
    {
        public DateTime StartDateOfWork { get; set; }
        public long SgkNo { get; set ; }
        public override int Age(DateTime birthDay)
        {
            int currentYear = DateTime.Now.Year;
            return currentYear - birthDay.Year;
        }

        public Employee(string name, string surname, DateTime birthDate, DateTime startDateOfWork, long sgkNo) : base(name, surname, birthDate) => (StartDateOfWork, SgkNo) = (startDateOfWork, sgkNo);

    }
}
