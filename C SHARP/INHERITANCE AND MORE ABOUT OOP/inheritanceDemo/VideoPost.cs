namespace inheritanceDemo
{
    class VideoPost : Post
    {


        //Member fields
        protected bool isPlaying = false;
        protected int currentDuration = 0;
        Timer? timer;


        //Properties
        protected string? VideoURL { get; set; }
        protected int Length { get; set; }


        public VideoPost() { }

        public VideoPost(string title, string sendByUserName, string videoURL, int length, bool isPublic) : base(title, sendByUserName, isPublic)
        {
            VideoURL = videoURL;
            Length = length;
        }

        public void Play()
        {
            if (!isPlaying)
            {
                isPlaying = true;
                Console.WriteLine("Playing");
                timer = new Timer(TimerCallback, null, 0, 1000);

            }
        }

        private void TimerCallback(Object? o)
        {
            if (currentDuration < Length)
            {
                currentDuration++;
                Console.WriteLine("Video at " + currentDuration + "s");
                GC.Collect();
            }
            else
            {
                Stop();
            }
        }

        public void Stop()
        {
            if (isPlaying)
            {
                isPlaying = false;
                Console.WriteLine("Stopped at " + currentDuration);
                currentDuration = 0;
                timer.Dispose();
            }

        }

        public override string ToString()
        {
            return String.Format(ID + " - " + Title + " - " + VideoURL + " - " + Length + " - by " + SendByUserName);
        }
    }

}