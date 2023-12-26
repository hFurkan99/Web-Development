namespace IEnumerableExample_3
{
    internal class Program
    {
        private static void Main(string[] args)
        {

            PhoneBook MyPhoneBook = new PhoneBook();

            foreach (Contact contact in MyPhoneBook)
            {
                contact.Call();
            }


        }


    }
}