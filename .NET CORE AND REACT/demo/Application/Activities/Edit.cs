using AutoMapper;
using demo.Application.Core;
using demo.Domain;
using demo.Persistence;
using FluentValidation;
using MediatR;

namespace demo.Application.Activities
{
    public class Edit
    {
        public class Command : IRequest<Results<Unit>>
        {
            public Activity Activity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Results<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Results<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                if (activity == null)
                    return null;

                //Activitynin tüm özelliklerini teker teker yazmak yerine mapper kullanıldı.
                _mapper.Map(request.Activity, activity);

                // activity.Title = request.Activity.Title ?? activity.Title;
                // activity.Description = request.Activity.Description ?? activity.Description;


                var result = await _context.SaveChangesAsync() > 0;
                if (!result)
                {
                    return Results<Unit>.Failure("Failed to update activity");
                }
                return Results<Unit>.Success(Unit.Value);
            }
        }
    }
}
