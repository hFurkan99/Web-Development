using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Movies
{
    public partial class List
    {
        public class Query : IRequest<Results<List<Movie>>> { }

        public class Handler : IRequestHandler<Query, Results<List<Movie>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Results<List<Movie>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return Results<List<Movie>>.Success(
                    await _context.Movies.ToListAsync(cancellationToken)
                );
            }
        }
    }
}
