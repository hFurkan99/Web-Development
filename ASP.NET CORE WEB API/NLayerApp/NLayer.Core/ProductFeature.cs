﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NLayer.Core
{
    internal class ProductFeature
    {
        public int Id { get; set; }
        public string Color { get; set; }
        public string Height { get; set; }
        public string Width { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}
