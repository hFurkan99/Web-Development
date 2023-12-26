using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using productsAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
builder.Services.AddDbContext<ProductsContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<UsersContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<AppUser, AppRole>().AddEntityFrameworkStores<UsersContext>(); // identity tablolarının saklandığı context

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequiredLength = 7;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireDigit = false;

    options.User.RequireUniqueEmail = true;
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";

    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
});

//gelen token bilgisi doğru mu değil mi
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false; //http'den de talep yapılabilir
    x.TokenValidationParameters = new TokenValidationParameters
    {   //Aşağıdaki validasyon kuralları true olursa tokenDescriptor içinde tanımlanmalı.
        //Apiyi kim yayınlamış
        ValidateIssuer = false,
        ValidIssuer = "hfb",
        //Bu api hangi firmalar ya da hangi servisler için geliştirildi
        ValidateAudience = false,
        ValidAudiences = new string[] { "a", "b" },
        //key bilgisi (token) validate edilir
        ValidateIssuerSigningKey = true,
        //Token'ın şifreleme aşamasından kopyala
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration.GetSection("appSettings:Secret").Value ?? "")), // GenerateJWT içindeki key bilgisi (_configuration'a builder.Configuration şeklinde ulaşılır)
        // Token'ın süresini kontrol etme
        ValidateLifetime = true
    };
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

//Swagger'a authorize butonu eklemek için AddSwaggerGen içinde ayarlamalar yapıldı. https://code-maze.com/swagger-authorization-aspnet-core/
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication(); // jwt doğrulaması için
app.UseAuthorization();

app.MapControllers();

app.Run();
