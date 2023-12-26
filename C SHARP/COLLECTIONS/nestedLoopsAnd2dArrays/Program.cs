namespace nestedLoopsAnd2dArrays
{
    internal class Program
    {
        static int[,] matrix = new int[,]
        {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        private static void Main(string[] args)
        {
            Console.WriteLine("Foreach");
            foreach (var item in matrix)
            {
                Console.Write(item + "  ");
            }

            Console.WriteLine("\n\nNested For Loop");
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i, j] + "  ");
                }
                Console.WriteLine("\n");
            }

            Console.WriteLine("Nested For Loop and finding the odd ones");
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (matrix[i, j] % 2 != 0)
                    {
                        Console.Write(matrix[i, j] + "  ");
                    }
                }
            }

            Console.WriteLine("\nSol üstten sağ alta doğru olan köşegen");
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (i == j)
                    {
                        Console.Write(matrix[i, j] + "  ");
                    }
                    else
                    {
                        Console.Write(" ");
                    }
                }

                Console.Write("\n");
            }

            Console.WriteLine("\n Sağ üstten sol alta doğru olan köşegen");
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (i + j == 2)
                    {
                        Console.Write(matrix[i, j] + "  ");
                    }
                    else
                    {
                        Console.Write(" ");
                    }
                }
                Console.WriteLine();
            }

            Console.WriteLine("\n Sağ üstten sol alta doğru olan köşegen - 2. Yöntem ");
            for (int i = 0, j = matrix.GetLength(1) - 1; i < matrix.GetLength(0); i++, j--)
            {
                Console.WriteLine(matrix[i, j]);
            }

        }
    }
}