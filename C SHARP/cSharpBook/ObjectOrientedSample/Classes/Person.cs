using ObjectOrientedSample.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientedSample.Classes
{
    public abstract class Person : IPerson
    {
        public  string Name { get; set; }
        public  string Surname { get; set; }
        public  DateTime Birthday { get; set; }

        protected Person(string name, string surname, DateTime birthDate) => (Name, Surname, Birthday) = (name, surname, birthDate);


        public abstract int Age(DateTime birthDay);

        public float VKI(float heigt, float weight) => weight / (heigt * heigt);
        public decimal VKI(decimal heigt, decimal weight) => weight / (heigt * heigt);
        public double VKI(double heigt, double weight) => weight / (heigt * heigt);
    }
}
