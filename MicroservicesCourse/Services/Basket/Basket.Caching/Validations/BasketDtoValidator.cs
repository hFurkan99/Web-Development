using Basket.Core.DTOs;
using FluentValidation;
using Microsoft.Extensions.Localization;
using Shared;

namespace Basket.Service.Validations
{
    public class BasketDtoValidator : AbstractValidator<BasketDto>
    {
        private readonly IStringLocalizer<SharedLocalization> _localizer;

        public BasketDtoValidator(IStringLocalizer<SharedLocalization> localizer)
        {
            _localizer = localizer;

            RuleFor(x => x.TotalPrice).InclusiveBetween(1, int.MaxValue).WithMessage("{PropertyName} " + _localizer["GreaterZero"]);
            RuleFor(x => x.UserId).GreaterThan(0).WithMessage("{PropertyName} " + _localizer["GreaterZero"]);
        }

    }
}
