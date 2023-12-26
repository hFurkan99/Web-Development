using demo.Application.Core;
using demo.Persistence;
using MediatR;

namespace demo.Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Results<Unit>>
        {
            public Guid Id { get; set; }
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
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null)
                    return null;

                _context.Remove(activity);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                {
                    return Results<Unit>.Failure("Failed to delete the activity");
                }
                return Results<Unit>.Success(Unit.Value);
            }
        }
    }
}
