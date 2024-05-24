using Autofac.Extensions.DependencyInjection;
using Autofac;
using Catalog.API.Filters;
using Catalog.API.Middlewares;
using Catalog.API.Modules;
using Catalog.Repository;
using Catalog.Service.Mapping;
using Catalog.Service.Validations;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Microsoft.AspNetCore.Localization;
using System.Globalization;

namespace Catalog.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
        var builder = WebApplication.CreateBuilder(args);


            //FluentValidation
            builder.Services.AddControllers(options => options.Filters.Add(new ValidateFilterAttribute())).AddFluentValidation(x => x.RegisterValidatorsFromAssemblyContaining<CourseDtoValidator>());
            builder.Services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;

            });

            // Localization services

            builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

            builder.Services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en"),
                    new CultureInfo("tr"),
                };

                options.DefaultRequestCulture = new RequestCulture("en");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
            });

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //AutoMapper
            builder.Services.AddAutoMapper(typeof(MapProfile));

            ////Postgresql
            //builder.Services.AddDbContext<AppDbContext>(options =>
            //options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

            //SqlServer
            builder.Services.AddDbContext<AppDbContext>(x =>
            {
                x.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), option =>
                {
                    option.MigrationsAssembly(Assembly.GetAssembly(typeof(AppDbContext)).GetName().Name);
                });
            });

            //AutoFac
            builder.Host.UseServiceProviderFactory
                (new AutofacServiceProviderFactory());
            builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder => containerBuilder.RegisterModule(new RepoServiceModule()));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            var supportedCultures = new[] { "en", "tr"};
            var localizationOptions = new RequestLocalizationOptions()
                .SetDefaultCulture(supportedCultures[0])
                .AddSupportedCultures(supportedCultures)
                .AddSupportedUICultures(supportedCultures);

            app.UseRequestLocalization(localizationOptions);

            //CustomException
            app.UseCustomException();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
