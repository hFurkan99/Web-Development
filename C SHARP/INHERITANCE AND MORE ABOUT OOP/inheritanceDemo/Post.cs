using System.Reflection.Metadata;
using System;

namespace inheritanceDemo
{
    class Post
    {
        private static int currentPostId = 0;

        //properties
        //protected değişkenler sadece bu sınıfta ya da bu sınıftan türetilen alt sınıflarda kullanılabilir
        protected int ID { get; set; }
        protected string? Title { get; set; }
        protected string? SendByUserName { get; set; }
        protected bool IsPublic { get; set; }

        public Post()
        {
            ID = 0;
            Title = "My first post";
            SendByUserName = "Hasan Furkan Baltacı";
            IsPublic = true;
        }

        public Post(string title, string sendByUserName, bool isPublic)
        {
            ID = GetNextID();
            Title = title;
            SendByUserName = sendByUserName;
            IsPublic = isPublic;
        }

        protected int GetNextID()
        {
            return ++currentPostId;
        }

        public void Update(string title, bool isPublic)
        {
            Title = title;
            IsPublic = isPublic;
        }


        //Virtual method override of the ToString method that is inherited from System.Object
        public override string ToString()
        {
            return String.Format(ID + " - " + Title + " - by " + SendByUserName);
        }
    }

}