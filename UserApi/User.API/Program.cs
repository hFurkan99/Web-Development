using UserAPI.Business;
using UserAPI.DataAccess;
using Microsoft.EntityFrameworkCore;
using UserAPI.Dtos;
using Ozcorps.Generic.Controllers;
using Ozcorps.Ozt;
using UserAPI.Models;
using Ozcorps.Generic.Dal;

var _builder = WebApplication.CreateBuilder(args);

_builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new GeometryJsonConverter());
});

_builder.Services.AddCors(o => o.AddPolicy("cors-policy",
    builder => builder.AllowAnyOrigin().
        AllowAnyMethod().
        AllowAnyHeader()));

_builder.Services.AddEndpointsApiExplorer();

_builder.Services.AddSwaggerGen();

_builder.Services.AddGeneric();

_builder.Services.AddOzt();

_builder.Services.AddLdapTool();

_builder.Services.AddRsaEncryptor();

var _db = _builder.Configuration["Db"];

if (_db == "Postgre")
{
    UserDbContext.SequenceDbType = SequenceDbType.POSTGRE;

    AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

    _builder.Services.AddOzPostgreLogger(
        _builder.Configuration.GetConnectionString(_db + "Logger"));

    _builder.Services.AddDbContext<DbContext, UserDbContext>(options =>
        options.UseNpgsql(_builder.Configuration.GetConnectionString(_db),
            x => x.UseNetTopologySuite()));
}
else if (_db == "Mssql")
{
    UserDbContext.SequenceDbType = SequenceDbType.MSSQL;

    _builder.Services.AddDbContext<DbContext, UserDbContext>(options =>
        options.UseSqlServer(_builder.Configuration.GetConnectionString(_db),
            x => x.UseNetTopologySuite()));

    _builder.Services.AddOzMssqlLogger(_builder.Configuration.GetConnectionString("MssqlLogger"),
        _schema: _builder.Configuration.GetConnectionString("MssqlLoggerScheme"));
}

_builder.Services.AddAutoMapper(typeof(MappingProfile));

_builder.Services.AddScoped<IUserService, UserService>();

_builder.Services.AddSingleton<OztTool>();

_builder.Services.AddSingleton<EmailTool>();

_builder.Services.Configure<CustomLdapConfig>(_builder.Configuration.GetSection("Ldap"));

_builder.Services.Configure<EmailConfiguration>(_builder.Configuration.GetSection("Email"));

var _app = _builder.Build();

if (_app.Environment.IsDevelopment())
{
    _app.UseSwagger();

    _app.UseSwaggerUI();
}

_app.UseHttpsRedirection();

_app.UseAuthorization();

_app.MapControllers();

_app.UseCors("cors-policy");

_app.Run();
