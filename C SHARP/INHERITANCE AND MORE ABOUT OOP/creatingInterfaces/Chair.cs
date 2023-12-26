using System.Drawing;
using System.Security.AccessControl;

namespace creatingInterfaces
{
    class Chair : Furniture, IDestroyable
    {
        public string? DestructionSound { get; set; }



        public Chair(string color, string metarial) : base(color, metarial)
        {
            DestructionSound = "ChairDestructionSound.mp3";
        }

        public void Destroy()
        {
            Console.WriteLine("The " + Color + " chair was destroyed.");
            Console.WriteLine("Playing destruction sound " + DestructionSound);
            Console.WriteLine("Spawning chair parts");
        }
    }

}