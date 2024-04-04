using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientedSample.Interfaces
{
    public interface IEmployee
    {
        public DateTime StartDateOfWork { get; set; }
        public long SgkNo { get; set; }
    }
}
