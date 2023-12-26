using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace myClass
{
    public class Car
    {
        private string _name;
        private int _hp;
        private string _color;

        public Car()
        {
            _name = "Car";
            _hp = 0;
            _color = "Beyaz";
            Console.WriteLine(_color + " renkte " + _hp + " beygir gücüne sahip " + _name + " isimli bir araç oluşturuldu");
        }

        public Car(string name, int hp)
        {
            _name = name;
            _hp = hp;
            _color = "Beyaz";
            Console.WriteLine(_color + " renkte " + _hp + " beygir gücüne sahip " + _name + " isimli bir araç oluşturuldu");
        }

        public Car(string name, int hp = 0, string color = "Siyah")
        {
            _name = name;
            _hp = hp;
            _color = color;
            Console.WriteLine(_color + " renkte " + _hp + " beygir gücüne sahip " + _name + " isimli bir araç oluşturuldu");
        }


        public void Drive()
        {
            Console.WriteLine(_name + " harekete geçti");
        }
        public void Stop()
        {
            Console.WriteLine(_name + " durduruldu");
        }
        public void Details()
        {
            Console.WriteLine("Araç İsmi: " + _name + "\nAraç Rengi: " + _color + "\nAracın Beygir Gücü: " + _hp);
        }





    }
}