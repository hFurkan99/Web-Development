using UserAPI.Entities;
using Ozcorps.Core.Models;

namespace UserAPI.Dtos;

public class ResponseValidateUserDto : Response
{
    public User User { get; set; }

    public List<Permission> Permissions { get; set; }

    public List<Role> Roles { get; set; }

    public bool IsLdapLogin { get; set; }
}
