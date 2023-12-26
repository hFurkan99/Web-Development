namespace Movies.DTOs
{
    public class MovieDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
        public string Genre { get; set; }
        public string Year { get; set; }
        public string RunTime { get; set; }
        public string Director { get; set; }
        public string Poster { get; set; }
    }
}
