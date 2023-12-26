namespace creatingInterfaces
{
    class Car : Vehicle, IDestroyable
    {

        public string? DestructionSound { get; set; }

        //This list is type of IDestroyable which means it can store any object that implements this interface and we can only access the properties and methods in this interfaces
        public List<IDestroyable> DestroyablesNearby;

        public Car(float speed, string color) : base(speed, color)
        {
            DestructionSound = "CarExpolisionSound.mp3";
            DestroyablesNearby = new List<IDestroyable>();
        }

        public void Destroy()
        {
            Console.WriteLine("Playing destruction sound " + DestructionSound);
            Console.WriteLine("Create fire");

            //go through each destroyable object nearby and call its destroy  method
            foreach (IDestroyable destroyable in DestroyablesNearby)
            {
                destroyable.Destroy();
            }
        }
    }

}