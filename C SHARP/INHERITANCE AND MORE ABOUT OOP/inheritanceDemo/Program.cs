
namespace inheritanceDemo
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Post post1 = new Post("Doğum günü hediyesi", "Hasan Furkan Baltacı", true);
            Console.WriteLine(post1.ToString());
            Post post2 = new Post();
            Console.WriteLine(post2.ToString());
            Post post4 = new Post("Galatasaray'ın şampiyonlar ligi maçları", "Fatih Terim", true);
            Console.WriteLine(post4.ToString());
            Post post5 = new Post("Mutlaka izlenmesi gereken filmler", "Kutay Akkurt", true);
            Console.WriteLine(post5.ToString());
            ImagePost image1 = new ImagePost();
            Console.WriteLine(image1.ToString());
            ImagePost image2 = new ImagePost("Manzara fotoğrafı", "Hasan Furkan Baltacı", "https://images.com", true);
            Console.WriteLine(image2.ToString());
            VideoPost video1 = new VideoPost();
            Console.WriteLine(video1.ToString());
            VideoPost video2 = new VideoPost("Maç Özeti", "beIN SPORTS", "https://youtube.com", 15, true);
            Console.WriteLine(video2.ToString());
            ImagePost image3 = new ImagePost("Manzara fotoğrafı", "Hasan Furkan Baltacı", "https://images.com", true);
            Console.WriteLine(image3.ToString());


            VideoPost video4 = new VideoPost("Maç Özeti", "beIN SPORTS", "https://youtube.com", 15, true);
            Console.WriteLine(video4.ToString());

            video4.Play();
            Console.WriteLine("Videoyu durdurmak için herhangi bir tuşa basınız.");
            Console.ReadKey();
            Console.WriteLine();
            video4.Stop();





        }
    }
}