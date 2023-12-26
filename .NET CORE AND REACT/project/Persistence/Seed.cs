using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            // if (!userManager.Users.Any())
            // {
            var users = new List<AppUser>
            {
                new AppUser
                {
                    DisplayName = "Bob",
                    UserName = "bob",
                    Email = "bob@test.com  "
                },
                new AppUser
                {
                    DisplayName = "Tom",
                    UserName = "tom",
                    Email = "tom@test.com  "
                },
                new AppUser
                {
                    DisplayName = "Jane",
                    UserName = "jane",
                    Email = "jane@test.com  "
                }
            };

            foreach (var user in users)
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
            // }

            if (context.Movies.Any())
                return;

            var movies = new List<Movie>
            {
                new Movie
                {
                    Name = "Thor: Ragnarok",
                    Description =
                        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
                    Rating = 7.9f,
                    Genre = "Adventure",
                    Year = 2017,
                    RunTime = "2h 10m",
                    Director = "Taika Waititi"
                },
                new Movie
                {
                    Name = "Oppenheimer",
                    Description =
                        "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
                    Rating = 8.5f,
                    Genre = "Biography",
                    Year = 2023,
                    RunTime = "3h",
                    Director = "Christopher Nolan"
                },
                new Movie
                {
                    Name = "Elysium",
                    Description =
                        "In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth. A man takes on a mission that could bring equality to the polarized worlds.",
                    Rating = 6.6f,
                    Genre = "Action",
                    Year = 2013,
                    RunTime = "1h 49m",
                    Director = "Neill Blomkamp"
                }
            };

            await context.Movies.AddRangeAsync(movies);
            await context.SaveChangesAsync();
        }
    }
}
