﻿using Catalog.Core.DTOs;
using FluentValidation;
using Microsoft.Extensions.Localization;

namespace Catalog.Service.Validations
{
    public class CourseDtoValidator : AbstractValidator<CourseCreateDto>
    {
        private readonly IStringLocalizer<SharedResources> _localizer;

        public CourseDtoValidator(IStringLocalizer<SharedResources> localizer)
        {
            _localizer = localizer;

            RuleFor(x => x.Name).NotNull().WithMessage("{PropertyName} " + _localizer["req"]).NotEmpty().WithMessage("{PropertyName} " + _localizer["req"]);
            RuleFor(x => x.Price).InclusiveBetween(1, int.MaxValue).WithMessage("{PropertyName} must be greater than 0");
            RuleFor(x => x.CategoryId).GreaterThan(0).WithMessage("{PropertyName} must be greater than 0");
        }

    }
}
