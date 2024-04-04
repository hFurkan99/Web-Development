using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientedSample.Interfaces
{
    public interface IPerson
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime Birthday { get; set; }
        public int Age(DateTime birthDay);
        public float VKI(float heigt, float weight);
    }
}
