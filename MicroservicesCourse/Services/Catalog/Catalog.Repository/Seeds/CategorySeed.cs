using Catalog.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Repository.Seeds
{
    internal class CategorySeed : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasData(
                new Category { Id = 1, Name = "React", CreatedDate = DateTime.UtcNow},
                new Category {Id = 2, Name = ".Net Core", CreatedDate = DateTime.UtcNow },
                new Category { Id = 3, Name = "EF Core", CreatedDate = DateTime.UtcNow });
        }
    }
}
