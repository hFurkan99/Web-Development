using demo.Application.Activities;
using demo.Application.Core;
using demo.Middleware;
using demo.Persistence;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Postgresql
builder
    .Services
    .AddDbContext<DataContext>(
        opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    );

//CORS Policy
builder
    .Services
    .AddCors(opt =>
    {
        opt.AddPolicy(
            "CorsPolicy",
            policy =>
            {
                policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
            }
        );
    });

//MediatR
builder
    .Services
    .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));

//AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);

//Fluent Validation
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<Create>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//CORS
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

//usingin takip ettiği kodlar çalıştıktan sonra(HTTP requesti son bulduğu anda) beklemede olan migration için database oluşturulur. Ardından bu kod bloğu dispose edilir.
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
    await SeedDeneme.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}

app.Run();
