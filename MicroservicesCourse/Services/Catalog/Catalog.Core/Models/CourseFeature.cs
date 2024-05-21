namespace Catalog.Core.Models
{
    public class CourseFeature
    {
        public int Id { get; set; }
        public int Duration { get; set; }
        public int CourseId { get; set; }
        public Course? Course { get; set; }
    }
}