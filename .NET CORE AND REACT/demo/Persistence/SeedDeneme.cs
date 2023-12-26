using demo.Domain;

namespace demo.Persistence
{
    public class SeedDeneme
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Denemeler.Any())
                return;

            var denemeler = new List<Deneme>
            {
                new Deneme
                {
                    Name = "Past Activity 1",
                    Date = "23/06/200",
                    Bio = "Activity 2 months ago",
                    City = "London",
                },
                new Deneme
                {
                    Name = "Past Activity 2",
                    Date = "23/06/2155",
                    Bio = "Activity 6 months ago",
                    City = "Losadsndon",
                },
            };

            await context.Denemeler.AddRangeAsync(denemeler);
            await context.SaveChangesAsync();
        }
    }
}
