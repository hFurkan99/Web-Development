using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace constructors
{
    public class Phone
    {
        public string _Company = "";
        public string _Model = "";
        public string _ReleaseDay = "";

        public Phone()
        {
            _Company = "unknown";
            _Model = "unknown";
            _ReleaseDay = "unknown";
        }
        public Phone(string company, string model)
        {
            _Company = company;
            _Model = model;
            _ReleaseDay = "unknown";
        }
        public Phone(string company, string model, string releaseDay)
        {
            _Company = company;
            _Model = model;
            _ReleaseDay = releaseDay;
        }

        public void Introduce()
        {
            Console.WriteLine("It is {0} created by {1}. It was released {2}.", _Model, _Company, _ReleaseDay);
        }

    }
}