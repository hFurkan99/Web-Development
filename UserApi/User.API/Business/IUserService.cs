using System.Linq.Expressions;
using UserAPI.Dtos;
using UserAPI.Entities;

namespace UserAPI.Business;

public interface IUserService
{
    ResponseValidateUserDto Validate(RequestGetTokenDto _dto, bool _ldap = false);

    bool Any(Expression<Func<User, bool>> _predicate);

    User GetFirst(Expression<Func<User, bool>> _predicate);
    IEnumerable<UserRoleDescription> GetUserRoles(long _userId);

    User Get(string _username);

    User Add(UserDto _dto);

    void ResetPassword(string _email, long _userId);

    void ChangePassword(string _password, long _id);

    List<long> GetCompanyIds(long _userId);
}