using Ozcorps.Core.Models;
using Microsoft.AspNetCore.Mvc;
using UserAPI.Dtos;
using UserAPI.Business;
using Ozcorps.Logger;
using Ozcorps.Ozt;
using Nest;

namespace UserAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TokenController : ControllerBase
{
    private readonly IUserService _UserService;

    private readonly IOzLogger _Logger;

    private readonly OztTool _OztTool;

    public TokenController(IUserService _userService, IOzLogger _logger, OztTool _oztTool)
    {
        _UserService = _userService;

        _Logger = _logger;

        _OztTool = _oztTool;
    }

    [HttpPost]
    public Response GetToken(RequestGetTokenDto _dto)
    {
        var _result = new Response();

        try
        {
            var _responseValidateUser = _UserService.Validate(
                new()
                {
                    Password = _dto.Password,
                    Username = _dto.Username,
                }, false);

            if (!_responseValidateUser.Success)
            {
                _Logger.User(new UserLog
                {
                    Username = _dto.Username,
                    UserLogType = UserLogType.WrongLogIn,
                    UserId = _responseValidateUser.User?.Id ?? 0,
                    Date = DateTime.Now,
                    UserIpAddress = HttpContext.Connection.RemoteIpAddress?.ToString()
                });

                _result.Message = _responseValidateUser.Message;

                return _result;
            }

            var _tokenUser = new OztUser
            {
                CompanyIds = _UserService.GetCompanyIds(_responseValidateUser.User.Id),
                Email = _responseValidateUser.User.Email,
                Username = _responseValidateUser.User.Username,
                Permissions = _responseValidateUser.Permissions.
                    Select(x => x.Name).
                    ToList(),
                Roles = _responseValidateUser.Roles.
                    Select(x => x.Name).
                    ToList(),
                UserId = _responseValidateUser.User.Id,
                RoleIds = _responseValidateUser.Roles.
                    Select(x => x.Id).ToList()
            };

            var _token = _OztTool.GenerateToken(_tokenUser);

            if (string.IsNullOrEmpty(_token))
            {
                _result.Message = "Token oluşturulamadı.";

                return _result;
            }

            _Logger.User(new UserLog
            {
                UserLogType = UserLogType.LogIn,
                UserId = _responseValidateUser.User.Id,
                Username = _responseValidateUser.User.Username,
                UserRoles = _tokenUser.Roles.Any() ? _tokenUser.Roles.Aggregate((i, j) => i + "," + j) : "",
                Date = DateTime.Now,
                UserIpAddress = HttpContext.Connection.RemoteIpAddress?.ToString()
            });

            _result.Data = new
            {
                Token = _token,
                User = new
                {
                    UserId = _responseValidateUser.User.Id,
                    _responseValidateUser.User.Username
                }
            };

            _result.Success = true;
        }
        catch (Exception _ex)
        {
            _Logger.Error(_ex);
        }

        return _result;
    }

    [HttpPost("reset-password")]
    public Response ResetPassword(ResetPasswordDto _dto)
    {
        var _result = new Response();

        try
        {
            var _user = _UserService.GetFirst(x => x.Email == _dto.Email &&
                !x.IsDeleted &&
                x.IsActive);

            if (_user == null)
            {

                _user = _UserService.GetFirst(x => x.Username == _dto.Email &&
                    !x.IsDeleted &&
                    x.IsActive);

                if (_user == null)
                {
                    _result.Message = "Kullanıcı adı ya da email adresi bulunamadı!";

                    return _result;
                }
            }

            if (_user.IsLdap)
            {
                _result.Message = "Ldap kullanıcılarını şifresi uygulama üzerinden değiştirilemez!";

                return _result;
            }

            _UserService.ResetPassword(_user.Email, _user.Id);

            _result.Data = true;

            _result.Success = true;
        }
        catch (Exception _ex)
        {
            _Logger.Error(_ex);
        }

        return _result;
    }

    [HttpPost("change-password")]
    public Response ChangePassword(ChangePasswordDto _dto)
    {
        var _result = new Response();

        try
        {
            var _user = _OztTool.ValidateToken(_dto.Token);

            if (!_user.IsValidated || _user.OztUser.Roles[0] != "reset-pass")
            {
                _result.Message = "Kullanıcı bulunamadı ya da şifre sıfırlama bağlantısı zaman aşımına uğramış olabilir. Lütfen yeni bir şifre sıfırlama isteğinde bulunun.";

                return _result;
            }

            _UserService.ChangePassword(_dto.Password, _user.OztUser.UserId);

            _result.Data = true;

            _result.Success = true;
        }
        catch (Exception _ex)
        {
            _Logger.Error(_ex);
        }

        return _result;
    }

    [HttpPost("get-user")]
    [OztActionFilter()]
    public Response GetUser(string username)
    {
        var _result = new Response();
        try
        {
            var _user = _UserService.Get(username);
            var _userRoles = _UserService.GetUserRoles(_user.Id).ToList();
            if (_user != null)
            {
                var userWithRoles = new UserWithRoles
                {
                    User = _user,
                    Roles = _userRoles
                };
                _result.Data = userWithRoles;
            }
            _result.Success = true;
        }
        catch (Exception _ex)
        {
            _Logger.Error(_ex);
        }

        return _result;
    }

    [HttpPost("add-user")]
    public Response AddUser(UserDto userDto)
    {
        var _result = new Response();
        try
        {
            var user = _UserService.Add(userDto);
            _result.Success= true;
            _result.Data = user;
        }
        catch (Exception _ex)
        {
            _Logger.Error(_ex);
        }

        return _result;
    }

}

