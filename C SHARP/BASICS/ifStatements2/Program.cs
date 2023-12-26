using System.Security;

namespace IfStatements2
{
    internal class Program
    {
        public static int score, parseScore, highScore = 3000;
        public static string? playerName = "Furkan", newPlayerName;
        static char? yesOrNo;
        static bool _continue = true;

        public static void AddPlayer()
        {
            Console.WriteLine("Oyuncunun adını giriniz:");
            newPlayerName = Console.ReadLine();

            Console.WriteLine("Oyuncunun skorunu giriniz: ");
            if (int.TryParse(Console.ReadLine(), out parseScore))
            {
                HighScore(newPlayerName, parseScore);
            }
            else
            {
                HighScore(newPlayerName, 0);
            }
        }

        public static void HighScore(string? player, int score)
        {
            if (score > highScore)
            {
                playerName = player;
                highScore = score;
            }
        }


        private static void Main(string[] args)
        {


            while (_continue == true)
            {
                Console.WriteLine("{0} has the highest score with {1} points.", playerName, highScore);
                Console.WriteLine("Yeni bir oyuncu girmek istiyor musunuz?(E/H)");
                yesOrNo = Console.ReadLine()?[0];
                if (yesOrNo == 'E')
                {
                    AddPlayer();
                }
                else if (yesOrNo == 'H')
                {
                    Console.WriteLine("{0} won the game with {1} points", playerName, highScore);
                    _continue = false;
                }
            }
        }
    }
}

