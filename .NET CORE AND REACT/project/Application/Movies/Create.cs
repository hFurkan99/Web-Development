using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Movies
{
    public class Create
    {
        public class Command : IRequest<Results<Unit>>
        {
            public Movie Movie { get; set; }
        }

        public class Handler : IRequestHandler<Command, Results<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Results<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                _context.Movies.Add(request.Movie);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                {
                    return Results<Unit>.Failure("Film oluşturulamadı!");
                }

                return Results<Unit>.Success(Unit.Value);
            }
        }
    }
}
