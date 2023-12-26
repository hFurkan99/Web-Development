using demo.Application.Core;
using demo.Domain;
using demo.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace demo.Application.Denemeler
{
    public class DenemeList
    {
        public class Query : IRequest<Results<List<Deneme>>> { }

        public class Handler : IRequestHandler<Query, Results<List<Deneme>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Results<List<Deneme>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return Results<List<Deneme>>.Success(
                    await _context.Denemeler.ToListAsync(cancellationToken)
                );
            }
        }
    }
}
