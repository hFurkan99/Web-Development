using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Catalog.Core.Models
{
    public class Course : BaseEntity
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public int UserId { get; set; }
        public string? Picture { get; set; }
        public CourseFeature? CourseFeature { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}
