using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Service.Exceptions
{
    public class NotFoundExcepiton : Exception
    {
        private const string DefaultMessage = "The requested resource was not found.";
        public NotFoundExcepiton() : base(DefaultMessage) { }
        public NotFoundExcepiton(string message) : base(string.IsNullOrEmpty(message) ? DefaultMessage : message) { }
    }
}
