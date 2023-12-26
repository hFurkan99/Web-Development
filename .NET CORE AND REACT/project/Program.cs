using System.Text;
using Application.Interfaces;
using Application.Movies;
using Domain;
using Infrastructure.Photos;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Persistence;
using project.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//PostgreSql
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
    .AddMediatR(cgf => cgf.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));

////////////////////////////////Identity///////////////////////////////
builder
    .Services
    .AddIdentityCore<AppUser>(opt =>
    {
        opt.Password.RequireNonAlphanumeric = false;
    })
    .AddEntityFrameworkStores<DataContext>();

var key = new SymmetricSecurityKey(
    Encoding
        .UTF8
        .GetBytes(
            "d5401102c878af5871e58ed8263cdfb250fa56f72b03f58e91e9da84b58162f9765e37a6844f772fae0e4395fbcbdfcdafe676ecf7b744de1cbc32cec5ee60da"
        )
);

builder
    .Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = key,
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

builder.Services.AddScoped<TokenService>();

////////////////////////////////Identity///////////////////////////////
///

//Cloudinary
builder.Services.AddScoped<IPhotoAccessor, PhotoAccessor>();
builder.Services.Configure<CloudinarySettings>(builder.Configuration.GetSection("Cloudinary"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//CORS
app.UseCors("CorsPolicy");

//Identity
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

//Seed
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context, userManager);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}

app.Run();
