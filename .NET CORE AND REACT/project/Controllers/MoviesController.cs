using Application.Movies;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    public class MoviesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetMovies()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovie(Movie movie)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Movie = movie }));
        }
    }
}
