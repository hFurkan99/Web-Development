using Catalog.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Repository.Configurations
{
    internal class CourseConfiguration : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            //builder.HasKey(x => x.Id);
            //builder.Property(x => x.Id).UseIdentityColumn();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.CategoryId).IsRequired();

            builder.Property(x => x.Price).IsRequired().HasColumnType("decimal(18,2)");

            //builder.ToTable("Products");
            //builder.HasOne(x => x.Category).WithMany(x => x.Courses).HasForeignKey(x => x.CategoryId);
        }
    }
}
