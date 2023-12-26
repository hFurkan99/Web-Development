using Microsoft.AspNetCore.Authorization.Infrastructure;

namespace MeetingApp.Models
{


    public static class Repository
    {


        private static List<UserInfo> _users = new();


        static Repository()
        {
            _users.Add(new UserInfo() { Id = 1, Name = "Ali", Email = "asd@gmail.com", Phone = "123456789", WillAttend = true });
            _users.Add(new UserInfo() { Id = 2, Name = "Ahmet", Email = "assdd@gmail.com", Phone = "123454789", WillAttend = false });
            _users.Add(new UserInfo() { Id = 3, Name = "Mehmet", Email = "asddsa@gmail.com", Phone = "189456789", WillAttend = true });
        }

        public static List<UserInfo> Users
        {
            get
            {
                
                return _users;
            }
        }

        public static void CreateUser(UserInfo user)
        {
            user.Id = Users.Count + 1;
            _users.Add(user);
        }


        public static UserInfo? GetById(int id){
            return _users.FirstOrDefault(user => user.Id == id);
        }


    }
}