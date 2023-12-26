using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace productsAPI.Models
{
    public class UsersContext : IdentityDbContext<AppUser, AppRole, int>
    {

        public UsersContext(DbContextOptions<UsersContext> options) : base(options) { }
    }
}