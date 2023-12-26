namespace inheritanceDemo

{
    class ImagePost : Post
    {
        public string? ImageURL { get; set; }
        public ImagePost() { }

        public ImagePost(string title, string sendByUserName, string imageURL, bool isPublic) : base(title, sendByUserName, isPublic)
        {
            ImageURL = imageURL;
        }

        public override string ToString()
        {
            return String.Format(ID + " - " + Title + " - " + ImageURL + " - by " + SendByUserName);
        }


    }
}