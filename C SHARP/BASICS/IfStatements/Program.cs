namespace IfStatements
{
    internal class Program
    {
        static string? userId, registeredUserId = "Furkan", userPassword, registeredUserPassword = "12345.hfb";
        static string? newUserId, newUserPassword;
        static sbyte uncorrectPasswordCounter = 0;
        static bool isLoginSuccessful = false, isPasswordTrue = false, passwordLimit = false;
        private static void Main(string[] args)
        {


            while (isLoginSuccessful == false && passwordLimit == false)
            {
                Console.WriteLine("Kullanıcı adınızı giriniz: ");
                userId = Console.ReadLine();

                if (userId == registeredUserId || userId == newUserId)
                {
                    while (isPasswordTrue == false && passwordLimit == false)
                    {
                        Console.WriteLine("Şifrenizi giriniz: ");
                        userPassword = Console.ReadLine();

                        if (userPassword == registeredUserPassword || userPassword == newUserPassword)
                        {
                            Console.WriteLine("Merhaba, " + userId);
                            isPasswordTrue = true;
                            isLoginSuccessful = true;
                        }
                        else
                        {
                            Console.WriteLine("Hatalı şifre!");
                            uncorrectPasswordCounter++;
                            if (uncorrectPasswordCounter == 3)
                            {
                                Console.WriteLine("Şifre deneme hakkınız kalmadı. Sistemden çıkılıyor...");
                                passwordLimit = true;
                            }

                        }
                    }
                }
                else
                {
                    Console.WriteLine("Böyle bir kullanıcı bulunmamaktadır, lütfen bir hesap oluşturunuz.");
                    Console.WriteLine("Yeni bir kullanıcı adı giriniz: ");
                    newUserId = Console.ReadLine();
                    Console.WriteLine("Şifre oluşturunuz:");
                    newUserPassword = Console.ReadLine();
                }
            }
        }
    }
}