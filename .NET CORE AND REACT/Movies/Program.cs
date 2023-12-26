using Microsoft.EntityFrameworkCore;
using Movies.Helpers;
using Persistence;

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

//Automapper
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);

//Azure or wwwroot
builder.Services.AddScoped<IFileStorageService, InAppStorageService>();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Saving images localy
app.UseStaticFiles();

//CORS
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
