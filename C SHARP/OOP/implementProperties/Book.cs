using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace implementProperties
{
    public class Book
    {
        private string? _title;
        private int _pages;

        public string? Title
        {
            get { return _title; }
            set
            {
                _title = string.IsNullOrEmpty(value) ? "Unknown" : value;
            }
        }

        public int Pages
        {
            get { return _pages; }
            set
            {
                _pages = value < 1 ? 1 : value;
            }
        }

    }
}