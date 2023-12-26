namespace myClass
{


    internal class Program
    {
        static int kontrol = 0, arac = 0;
        private static void Main(string[] args)
        {
            Car myCar = new Car();
            myCar.Drive();
            Car nissan = new Car("Nissan GTR R35", 530);
            nissan.Drive();
            Car ford = new Car("Ford Mustang Shelby GT500", 760, "Mavi");
            ford.Drive();

            while (kontrol != 3)
            {
                Console.WriteLine("Araçları durdurmak için 1, detayları görüntülemek için 2, sistemden çıkmak için 3 yazıp entera basınızı");
                kontrol = int.Parse(Console.ReadLine());

                if (kontrol == 1)
                {
                    Console.WriteLine("Hangi aracı durdurmak istiyorsunuzu? (1- myCar, 2-Nissan, 3-Ford)");
                    arac = int.Parse(Console.ReadLine());
                    if (arac == 1)
                    {
                        myCar.Stop();
                    }
                    else if (arac == 2)
                    {
                        nissan.Stop();
                    }
                    else
                    {
                        ford.Stop();
                    }

                    arac = 0;


                }
                else if (kontrol == 2)
                {
                    Console.WriteLine("Hangi aracın detaylarını görüntülemek istiyorsunuzu? (1- myCar, 2-Nissan, 3-Ford)");
                    arac = int.Parse(Console.ReadLine());
                    if (arac == 1)
                    {
                        myCar.Details();
                    }
                    else if (arac == 2)
                    {
                        nissan.Details();
                    }
                    else
                    {
                        ford.Details();
                    }
                    arac = 0;

                }
                else
                {
                    Console.WriteLine("Çıkış yapılıyor.");
                    kontrol = 3;
                }

            }







        }
    }


}

