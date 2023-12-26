using System.ComponentModel.DataAnnotations;

namespace Movies.Domain
{
    public class Movie
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Rating { get; set; }

        [Required]
        public string Genre { get; set; }

        [Required]
        public string Year { get; set; }

        [Required]
        public string RunTime { get; set; }

        [Required]
        public string Director { get; set; }

        [Required]
        public string Poster { get; set; }
    }
}
