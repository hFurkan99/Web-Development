using System.Collections;
using System.ComponentModel.DataAnnotations.Schema;

namespace hashtables
{
    internal class Program
    {



        private static void Main(string[] args)
        {
            Hashtable table = new Hashtable();


            Student[] students = new Student[5];
            students[0] = new Student(1, "Furkan", 100);
            students[1] = new Student(2, "Hasan", 90);
            students[2] = new Student(6, "Alperen", 60);
            students[3] = new Student(1, "Tuğral", 75);
            students[4] = new Student(4, "Kutay", 45);

            foreach (Student s in students)
            {
                if (!table.ContainsKey(s.Id))
                {
                    table.Add(s.Id, s);
                    Console.WriteLine("{0} ID'li öğrenci tabloya eklendi", s.Id);
                }
                else
                {
                    Console.WriteLine("{0} ID'sine sahip öğrenci zaten tabloda mevcut", s.Id);
                }

            }



        }
    }


    class Student
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public float Gpa { get; set; }

        public Student(int id, string name, float gpa)
        {
            Id = id;
            Name = name;
            Gpa = gpa;
        }


    }


}