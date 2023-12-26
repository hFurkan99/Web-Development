namespace inheritanceExample
{
    class TV : ElectricalDevice
    {

        //Child
        public TV(bool isOn, string brand) : base(isOn, brand)
        {

        }


        public void WatchTv()
        {
            if (IsOn)
            {
                Console.WriteLine("Watching TV");
            }
            else
            {
                Console.WriteLine("TV is switched off, switch it on first");
            }
        }
    }

}