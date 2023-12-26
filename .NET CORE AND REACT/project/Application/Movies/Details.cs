using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Movies
{
    public class Details
    {
        public class Query : IRequest<Results<Movie>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Results<Movie>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Results<Movie>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var movie = await _context.Movies.FindAsync(request.Id);
                return Results<Movie>.Success(movie);
            }
        }
    }
}
