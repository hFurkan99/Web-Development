namespace creatingInterfaces
{
    class Furniture
    {
        public string? Color { get; set; }
        public string? Metarial { get; set; }

        public Furniture()
        {
            Color = "White";
            Metarial = "Wood";
        }

        public Furniture(string color, string metarial)
        {
            Color = color;
            Metarial = metarial;
        }



    }

}