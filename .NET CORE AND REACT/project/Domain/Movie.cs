using project.Domain;

namespace Domain
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
        public string Genre { get; set; }
        public decimal Year { get; set; }
        public string RunTime { get; set; }
        public string Director { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
