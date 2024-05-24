using Ozcorps.Generic.Entity;
using UserAPI.Entities;

namespace UserAPI.Dtos;

public class UserWithRoles : EntityBase
{
    public User User { get; set; }
    public List<UserRoleDescription> Roles { get; set; }
}