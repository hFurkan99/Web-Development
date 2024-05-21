using Catalog.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Catalog.Repository.Seeds
{
    internal class CourseSeed : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.HasData(
                new Course { Id = 1, CategoryId = 2, Name = "Ugulamalı React Kursu", Description = "Harika bir kurs", Price = 156, UserId = 1, Picture = "react.img", CreatedDate = DateTime.UtcNow },
                new Course { Id = 2, CategoryId = 3, Name = "Ugulamalı Dotnet Kursu", Description = "Harika bir kurs", Price = 256, UserId = 1, Picture = "dotnet.img", CreatedDate = DateTime.UtcNow},
                new Course { Id = 3, CategoryId = 2, Name = "Modern React Kursu", Description = "Harika bir kurs", Price = 300, UserId = 2, Picture = "modernReact.img", CreatedDate = DateTime.UtcNow});
        }
    }
}
