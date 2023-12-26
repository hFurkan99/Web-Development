using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace basics.Models
{
    public class Course
    {
        public int id { get; set; } //prop yazarak oluşturdum

        public string? title { get; set; }

        public string? image { get; set; }

        public string? description { get; set; }

        public string[]? Tags { get; set; }

        public bool isActive { get; set; }

        public bool isHome { get; set; }
    }
}