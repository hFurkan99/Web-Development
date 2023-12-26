using System.Numerics;

namespace ticTacToe_winnerIdentifer
{
    internal class Program
    {

        static string[,] board = new string[,]
        {
            {"", "", ""},
            {"", "", ""},
            {"", "", ""}
        };

        static string[] vertical = new string[3];
        static string[] horizontal = new string[3];
        static string[] diagonal159 = new string[3];
        static string[] diagonal357 = new string[3];


        static bool isGameOver = false, isThereAWinner = false;
        static int X, Y;
        static string? stringX, stringY;

        static void WriteOnTheBoard(int x, int y, string symbol)
        {
            if (board[(x - 1), (y - 1)] == "")
            {
                board[(x - 1), (y - 1)] = symbol;
            }

            Console.WriteLine("-------");

            for (int i = 0; i < board.GetLength(0); i++)
            {
                for (int j = 0; j < board.GetLength(1); j++)
                {
                    Console.Write(board[i, j] + "  ");
                }
                Console.WriteLine();
            }
        }


        public static bool Checker(string[,] board)
        {
            // TODO

            // Horizontal
            for (int i = 0; i < board.GetLength(1); i++)
            {
                for (int j = 0; j < board.GetLength(0); j++)
                {
                    horizontal[j] = board[i, j];
                }
                if (horizontal[0] != "" && horizontal[1] != "" && horizontal[2] != "")
                {
                    if (horizontal[0] == horizontal[1] && horizontal[1] == horizontal[2])
                    {
                        return true;
                    }
                }

            }

            // Vertical
            for (int j = 0; j < board.GetLength(1); j++)
            {
                for (int i = 0; i < board.GetLength(0); i++)
                {
                    vertical[i] = board[i, j];
                }
                if (vertical[0] != "" && vertical[1] != "" && vertical[2] != "")
                {
                    if (vertical[0] == vertical[1] && vertical[1] == vertical[2])
                    {
                        return true;
                    }
                }

            }

            // Diagonal 159
            for (int i = 0; i < board.GetLength(1); i++)
            {
                for (int j = 0; j < board.GetLength(0); j++)
                {
                    int diagonalCount = 0;
                    if (i == j)
                    {
                        diagonal159[i] = board[i, j];
                        diagonalCount++;
                    }

                }
                if (diagonal159[0] != "" && diagonal159[1] != "" && diagonal159[2] != "")
                {
                    if (diagonal159[0] == diagonal159[1] && diagonal159[1] == diagonal159[2])
                    {
                        return true;
                    }
                }

            }

            // Diagonal 357
            for (int i = 0, j = board.GetLength(1) - 1; i < board.GetLength(1); i++, j--)
            {
                diagonal357[i] = board[i, j];

                if (diagonal357[0] != "" && diagonal357[1] != "" && diagonal357[2] != "")
                {
                    if (diagonal357[0] == diagonal357[1] && diagonal357[1] == diagonal357[2])
                    {
                        return true;
                    }
                }

            }

            return false;



        }
        private static void Main(string[] args)
        {
            while (!isGameOver)
            {
                Console.WriteLine("Birinci oyuncunun sırası: (X)");
                Console.WriteLine("Sırasıyla x ve y eksenlerini giriniz: (1-3)(1-3)");
                stringX = Console.ReadLine();
                int.TryParse(stringX, out X);
                stringY = Console.ReadLine();
                int.TryParse(stringY, out Y);
                WriteOnTheBoard(X, Y, "X");
                isThereAWinner = Checker(board);
                if (isThereAWinner)
                {
                    break;
                }
                foreach (var item in board)
                {
                    isGameOver = true;
                    if (item == "")
                    {
                        isGameOver = false;
                        break;
                    }
                }
                if (isGameOver == true)
                {
                    break;
                }

                Console.WriteLine("İkinci oyuncunun sırası: (O)");
                Console.WriteLine("Sırasıyla x ve y eksenlerini giriniz: (1-3)(1-3)");
                stringX = Console.ReadLine();
                int.TryParse(stringX, out X);
                stringY = Console.ReadLine();
                int.TryParse(stringY, out Y);
                WriteOnTheBoard(X, Y, "O");
                isThereAWinner = Checker(board);
                if (isThereAWinner)
                {
                    break;
                }

                foreach (var item in board)
                {
                    isGameOver = true;
                    if (item == "")
                    {
                        isGameOver = false;
                        break;
                    }
                }


            }
            Console.WriteLine("OYUN BİTTİ");
            if ((vertical[0] == "X" || horizontal[0] == "X" || diagonal159[0] == "X") && isThereAWinner == true)
            {
                Console.WriteLine("Oyunu birinci oyuncu kazandı(X)");
            }
            else if ((vertical[0] == "O" || horizontal[0] == "O" || diagonal159[0] == "X") && isThereAWinner == true)
            {
                Console.WriteLine("Oyunu ikinci oyuncu kazandı(O)");
            }
            else
            {
                Console.WriteLine("Oyunda kazanan yok");
            }



        }
    }
}