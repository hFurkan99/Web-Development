using AutoMapper;
using UserAPI.Models;
using UserAPI.Dtos;
using UserAPI.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Novell.Directory.Ldap;
using Ozcorps.Core.Encryptors;
using Ozcorps.Generic.Bll;
using Ozcorps.Generic.Dal;
using Ozcorps.Generic.Entity;
using Ozcorps.Logger;
using Ozcorps.Ozt;
using Ozcorps.Tools.Ldap;
using System.Linq.Expressions;
using System.Net.Mail;

namespace UserAPI.Business;

public class UserService : DbServiceBase, IUserService
{
    private readonly IRepository<User> _UserRepository;
    private readonly IRepository<UserRole> _UserRoleRepository;
    private readonly IRepository<UserCompany> _UserCompanyReposiyory;
    private readonly IRepository<Company> _CompanyReposiyory;
    private readonly IRepository<Account> _AccountRepository;
    private readonly IRepository<Role> _RoleRepository;
    private readonly IRepository<Permission> _PermissionRepository;
    private readonly IRepository<RolePermission> _RolePermissionRepository;
    private readonly IMapper _Mapper;
    private readonly IEncryptor _Encryptor;
    private readonly LdapOptions _LdapOptions;
    private readonly CustomLdapConfig _CustomLdapConfig;
    private readonly IOzLogger _Logger;
    private readonly OztTool _OztTool;
    private readonly IConfiguration _Config;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    private readonly EmailTool _EmailTool;
    public EmailConfiguration Configuration { get; init; }

    public UserService(IUnitOfWork _unitOfWork,
        IMapper _mapper,
        IEncryptor _encryptor,
        IOptions<LdapOptions> _ldapOptions,
        IOptions<CustomLdapConfig> _customLdapConfig,
        IWebHostEnvironment _webHostEnvironment,
        IOzLogger _logger,
                EmailTool _emailTool,
        IConfiguration _config,
        IOptions<EmailConfiguration> _settings,
        OztTool _oztTool) : base(_unitOfWork)
    {
        _UserRepository = _unitOfWork.GetRepository<User>();

        _UserRoleRepository = _unitOfWork.GetRepository<UserRole>();

        _RoleRepository = _unitOfWork.GetRepository<Role>();

        _PermissionRepository = _unitOfWork.GetRepository<Permission>();

        _RolePermissionRepository = _unitOfWork.GetRepository<RolePermission>();

        _AccountRepository = _unitOfWork.GetRepository<Account>();

        _CompanyReposiyory = _unitOfWork.GetRepository<Company>();

        _UserCompanyReposiyory = _unitOfWork.GetRepository<UserCompany>();

        _Mapper = _mapper;

        _Encryptor = _encryptor;

        _LdapOptions = _ldapOptions?.Value;

        _CustomLdapConfig = _customLdapConfig.Value;

        _Logger = _logger;

        _OztTool = _oztTool;

        _WebHostEnvironment = _webHostEnvironment;

        _EmailTool = _emailTool;

        _Config = _config;

        Configuration = _settings.Value;
    }

    public IEnumerable<User> GetAll() => _UserRepository.GetAll(x => !x.IsDeleted);

    public User Get(string _username)
    {
        var _user = _UserRepository.GetFirst(x => x.Username == _username);

        var _userDto = _Mapper.Map<User>(_user);

        return _userDto;
    }

    public User Add(UserDto _dto)
    {
        var _user = _Mapper.Map<User>(_dto);

        _user.SetModifiedEntity(_dto.UserId, _isInsert: true, _isActive: true);

        _user.Password = _Encryptor.Encrypt(_dto.Password);

        _UserRepository.Add(_user);

        Save();

        return _user;
    }

    public void ChangePassword(string _password, long _id)
    {
        var _user = _UserRepository.Get(_id);

        _user.SetModifiedEntity(_id);

        _user.Password = _Encryptor.Encrypt(_password);

        Save();
    }

    public User Update(UserDto _dto)
    {
        var _user = _UserRepository.Get(_dto.Id);

        _user.SetModifiedEntity(_dto.UserId, _isActive: _dto.IsActive);

        _user.Email = _dto.Email;

        _user.Name = _dto.Name;

        if (_dto.Password != "***")
        {
            _user.Password = _Encryptor.Encrypt(_dto.Password);
        }

        _user.Surname = _dto.Surname;

        _user.Username = _dto.Username;

        Save();

        return _user;
    }

    public void Remove(long _id, long _userId)
    {
        var _user = _UserRepository.Get(_id);

        _user.SetModifiedEntity(_userId, true);

        Save();
    }


    public List<long> GetCompanyIds(long _userId) =>
        _UserCompanyReposiyory.GetAll(x => x.UserId == _userId).
        Select(x => x.CompanyId).
        ToList();

    public ResponseValidateUserDto Validate(RequestGetTokenDto _dto, bool _ldap = false)
    {
        var _result = new ResponseValidateUserDto();

        User _user = null;

        var _isPasswordCorrect = false;

        #region ldap kontrolü
        if (_ldap)
        {
            _user = _UserRepository.Get(x => x.Username == _dto.Username &&
                    !x.IsDeleted &&
                    x.IsActive && x.IsLdap);

            try
            {
                var _conn = new LdapConnection();

                int _ldapPort = LdapConnection.DefaultPort;

                int _ldapVersion = LdapConnection.LdapV3;

                _conn.ConnectionTimeout = 15;

                _conn.Connect(_CustomLdapConfig.Ip, _ldapPort);

                _conn.Bind(_dto.Username + "@" + _CustomLdapConfig.Domain, _dto.Password);

                if (_conn.Bound)
                {
                    _isPasswordCorrect = true;
                }

                _conn.Disconnect();
            }
            catch (LdapException _ex)
            {
                if (_user != null)
                {
                    _Logger.Error(_ex);
                }
            }

            if (_user == null)
            {
                if (_isPasswordCorrect)
                {
                    _user = _UserRepository.Add(new User
                    {
                        Name = _dto.Username.Contains("@") ? _dto.Username.Split("@")[0].Split(".")[0] : _dto.Username.Split(".")[0],
                        Surname = (_dto.Username.Contains("@") ? _dto.Username.Split("@")[0].Split(".")[1] : _dto.Username.Split(".")[1]),
                        Email = (_dto.Username.Contains("@") ? _dto.Username : _dto.Username + "@" + _LdapOptions.Domain),
                        Username = _dto.Username,
                        Password = _Encryptor.Encrypt(_dto.Password),
                        InsertedUserId = 1,
                        IsActive = true,
                        IsDeleted = false,
                        IsLdap = true
                    });

                    _user.SetModifiedEntity(1, _isInsert: true);

                    var _userRole = new UserRole { UserId = _user.Id, RoleId = 2 };

                    _UserRoleRepository.Add(_userRole);

                    Save();
                }

            }
            else
            {
                if (!_isPasswordCorrect)
                {
                    var _message = "Ldap kullanıcı adı veya şifre yanlış.";

                    _user.SetModifiedEntity(1);

                    if (_user.Retries != 3)
                    {
                        _user.Retries += 1;
                    }

                    if (_user.Retries == 3)
                    {
                        if (_user.RetriesDate == null)
                        {
                            _user.RetriesDate = DateTime.Now;
                        }

                        var _controlMinute = Convert.ToInt64(DateTime.Now.Subtract(_user.RetriesDate.Value).TotalMinutes);

                        if (_controlMinute >= 30)
                        {
                            _user.SetModifiedEntity(1);

                            _user.Retries = 0;

                            _user.RetriesDate = null;
                        }
                        else
                        {
                            var _remainingMinute = Math.Abs(_controlMinute - 30);

                            _message = $"Kullanıcınız {_remainingMinute}'DK boyunca kilitlenmiştir.";
                        }
                    }

                    Save();

                    _result.Message = _message;

                    return _result;
                }
                else
                {
                    if (_user.Retries == 3) // Giriş deneme sayısı
                    {
                        var _controlMinute = Convert.ToInt64(DateTime.Now.Subtract(_user.RetriesDate.Value).TotalMinutes);

                        if (_controlMinute >= 30)
                        {
                            _user.SetModifiedEntity(1);

                            _user.Retries = 0;

                            _user.RetriesDate = null;

                            Save();
                        }
                        else
                        {
                            var _remainingMinute = Math.Abs(_controlMinute - 30);

                            _result.Message = $"Kullanıcınız {_remainingMinute}'DK boyunca kilitlenmiştir.";

                            return _result;
                        }
                    }
                    else
                    {
                        if (_Encryptor.Decrypt(_user.Password) == _dto.Password && _user.Retries > 0 && _user.Retries < 3)
                        {
                            _user.SetModifiedEntity(1);

                            _user.Retries = 0;

                            _user.RetriesDate = null;

                            Save();
                        }
                    }
                }
            }
        }
        #endregion

        if (_user == null)
        {
            _user = _UserRepository.Get(x => x.Username == _dto.Username &&
               !x.IsDeleted &&
               x.IsActive);

            if (_user == null)
            {
                _result.Message = "Kullanıcı bulunamadı.";

                return _result;
            }

            if (_user.Retries == 3) // Giriş deneme sayısı
            {
                var _controlMinute = Convert.ToInt64(DateTime.Now.Subtract(_user.RetriesDate.Value).TotalMinutes);

                if (_controlMinute >= 30)
                {
                    _user.SetModifiedEntity(1);

                    _user.Retries = 0;

                    _user.RetriesDate = null;

                    Save();
                }
                else
                {
                    var _remainingMinute = Math.Abs(_controlMinute - 30);

                    _result.Message = $"Kullanıcınız {_remainingMinute}'DK boyunca kilitlenmiştir.";

                    return _result;
                }
            }

            if (_Encryptor.Decrypt(_user.Password) != _dto.Password)
            {
                _user.SetModifiedEntity(1);

                if (_user.Retries != 3)
                {
                    _user.Retries += 1;
                }

                if (_user.Retries == 3)
                {
                    _user.RetriesDate = DateTime.Now;
                }

                Save();

                _result.Message = "Kullanıcı adı veya şifre yanlış.";

                return _result;
            }

            if (_Encryptor.Decrypt(_user.Password) == _dto.Password && _user.Retries > 0 && _user.Retries < 3)
            {
                _user.SetModifiedEntity(1);

                _user.Retries = 0;

                _user.RetriesDate = null;

                Save();
            }
        }

        var _roles = _UserRoleRepository.GetAll(x => x.UserId == _user.Id).ToList().
            Join(_RoleRepository.GetAll(), x => x.RoleId, y => y.Id,
                (x, y) => new
                {
                    Role = y,
                }).
            Join(_RolePermissionRepository.GetAll(), ur => ur.Role.Id, rp => rp.RoleId,
                (ur, rp) => new
                {
                    ur.Role,
                    RolePermission = rp
                }).
            Join(_PermissionRepository.GetAll(),
                rpu => rpu.RolePermission.PermissionId, p => p.Id,
                (rpu, p) => new
                {
                    rpu.Role,
                    Permission = p
                }).
            Select(x => new
            {
                x.Permission,
                x.Role
            });

        _result.Permissions = _roles.Select(x => x.Permission).Distinct().ToList();

        _result.Roles = _roles.Select(x => x.Role).Distinct().ToList();

        _result.User = _user;

        _result.Success = true;

        return _result;

    }

    public bool Any(Expression<Func<User, bool>> _predicate) =>
        _UserRepository.Any(_predicate);

    public User GetFirst(Expression<Func<User, bool>> _predicate) =>
        _UserRepository.GetFirst(_predicate);

    public void ResetPassword(string _email, long _userId)
    {
        var _token = _OztTool.GenerateToken(new OztUser
        {
            Email = _email,
            UserId = _userId,
            Roles = new List<string>() { "reset-pass" }
        });

        SendResetPasswordEmail(_email, _token);
    }

    // public void ResetPassword(string _email, long _userId)
    // {
    //     _email = "ogunozan@gmail.com";

    //     using (var _emailMessage = new MailMessage(new MailAddress(Configuration.From, "Başarsoft"), new MailAddress(_email)))
    //     {
    //         var _html = File.ReadAllText($"{_WebHostEnvironment.ContentRootPath}/" +
    //         "reset.html");

    //         _emailMessage.Body = _html.Replace("{ResetUrl}", "test")
    //             .Replace("{Email}", _email)
    //             .Replace("{CurrentYear}", DateTime.Now.Year.ToString());

    //         _emailMessage.IsBodyHtml = true;

    //         _emailMessage.Subject = "test";

    //         using (var _smtpClient = new SmtpClient(Configuration.SmtpServer, Configuration.Port))
    //         {
    //             _smtpClient.UseDefaultCredentials = false;
    //             _smtpClient.Credentials = new System.Net.NetworkCredential(Configuration.UserName, Configuration.Password);
    //             _smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
    //             _smtpClient.EnableSsl = true;
    //             _smtpClient.Send(_emailMessage);
    //         }
    //     }
    // }

    private void SendResetPasswordEmail(string _to, string _token)
    {
        var _html = File.ReadAllText($"{_WebHostEnvironment.ContentRootPath}/" +
            "reset-password.html");

        var _resetLink = _Config["WebUrl"] + "/reset-password?token=" + _token;

        _html = _html.Replace("[reset-link]", _resetLink);

        _html = _html.Replace("[app-name]", "Başarsoft Core App");

        _html = _html.Replace("[url]", _Config["WebUrl"]);

        var _inlineLogo = new LinkedResource(
            $"{_WebHostEnvironment.ContentRootPath}/images/logo.png",
            "image/png")
        {
            ContentId = Guid.NewGuid().ToString()
        };

        _html = _html.Replace("[logo]", _inlineLogo.ContentId);

        var _view = AlternateView.CreateAlternateViewFromString(_html, null, "text/html");

        _view.LinkedResources.Add(_inlineLogo);

        var _email = new EmailMessage(_EmailTool.Configuration.From,
            _to,
            "Şifre Sıfırlama",
            _view);

        _EmailTool.SendEmail(_email);
    }

    private void PrepareNewUser(string _pass)
    {
        // List<Permission> _permissions = new List<Permission>
        // {
        //     new Permission
        //     {
        //         Description = "Kullanıcı Ekleme",
        //         Name = "add-user",
        //     },
        //     new Permission
        //     {
        //         Description = "Yönetim Paneli Giriş",
        //         Name = "access-admin-panel",
        //     }
        // };

        // var _permissionIds = new List<long>();

        // foreach (var _permission in _permissions)
        // {
        //     _permissionIds.Add(_PermissionRepository.Add(_permission).Id);
        // }

        // var _role = _RoleRepository.Add(new Role
        // {
        //     InsertedDate = DateTime.Now,
        //     InsertedUserId = _user.Id,
        //     IsActive = true,
        //     Name = "Admin"
        // });

        // foreach (var _permissionId in _permissionIds)
        // {
        //     _RolePermissionRepository.Add(new RolePermission
        //     {
        //         PermissionId = _permissionId,
        //         RoleId = _role.Id,
        //         InsertedDate = DateTime.Now,
        //         InsertedUserId = _user.Id
        //     });
        // };

        var _account = new Account
        {
            Name = "Socar"
        };

        _account.SetModifiedEntity(1, _isInsert: true);

        var _addedAccount = _AccountRepository.Add(_account);

        var _company1 = new Company
        {
            Name = "Bursagaz",
            AccountId = _addedAccount.Id
        };

        var _addedCompany1 = _CompanyReposiyory.Add(_company1);

        var _company2 = new Company
        {
            Name = "Kayserigaz",
            AccountId = _addedAccount.Id
        };

        var _addedCompany2 = _CompanyReposiyory.Add(_company2);

        var _password = _Encryptor.Encrypt(_pass);

        var _user1 = new User
        {
            Username = "bursagaz",
            Surname = "bursagaz",
            Password = _password,
            Name = "bursagaz admin",
            Email = "bursagaz.admin@basarsoft.com.tr",
        };

        _user1.SetModifiedEntity(1, _isInsert: true);

        var _addedUser1 = _UserRepository.Add(_user1);

        _UserRoleRepository.Add(new UserRole
        {
            InsertedDate = DateTime.Now,
            InsertedUserId = _addedUser1.Id,
            RoleId = 1,
            UserId = _addedUser1.Id
        });

        var _user2 = new User
        {
            Username = "kayserigaz",
            Surname = "kayserigaz",
            Password = _password,
            Name = "kayserigaz admin",
            Email = "kayserigaz.admin@basarsoft.com.tr",
        };

        _user2.SetModifiedEntity(1, _isInsert: true);

        var _addedUser2 = _UserRepository.Add(_user2);

        _UserRoleRepository.Add(new UserRole
        {
            InsertedDate = DateTime.Now,
            InsertedUserId = _addedUser2.Id,
            RoleId = 1,
            UserId = _addedUser2.Id
        });

        var _user3 = new User
        {
            Username = "socar",
            Surname = "socar",
            Password = _password,
            Name = "socar admin",
            Email = "socar.admin@basarsoft.com.tr",
        };

        _user3.SetModifiedEntity(1, _isInsert: true);

        var _addedUser3 = _UserRepository.Add(_user3);

        _UserRoleRepository.Add(new UserRole
        {
            InsertedDate = DateTime.Now,
            InsertedUserId = _addedUser3.Id,
            RoleId = 1,
            UserId = _addedUser3.Id
        });

        var _userCompany1 = new UserCompany
        {
            CompanyId = _addedCompany1.Id,
            UserId = _addedUser1.Id
        };

        _UserCompanyReposiyory.Add(_userCompany1);

        var _userCompany2 = new UserCompany
        {
            CompanyId = _addedCompany2.Id,
            UserId = _addedUser2.Id
        };

        _UserCompanyReposiyory.Add(_userCompany2);

        _UserCompanyReposiyory.Add(new UserCompany
        {
            CompanyId = _addedCompany1.Id,
            UserId = _addedUser3.Id
        });

        _UserCompanyReposiyory.Add(new UserCompany
        {
            CompanyId = _addedCompany2.Id,
            UserId = _addedUser3.Id
        });

        Save();
    }

    public IEnumerable<UserRoleDescription> GetUserRoles(long _userId)
{
    var userRoles = _UserRoleRepository
        .GetAll(x => x.UserId == _userId)
        .ToList();
    var roles = _RoleRepository
        .GetAll()
        .ToList();
    var userRoleDescriptions = userRoles
        .Join(roles, ur => ur.RoleId, r => r.Id, (ur, r) => new UserRoleDescription
        {
            RoleId = r.Id,
            RoleName = r.Name,
        });

    return userRoleDescriptions;
}



}