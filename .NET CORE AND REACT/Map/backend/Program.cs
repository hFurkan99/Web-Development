var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.UseAuthorization();

app.MapControllers();

app.Run();
