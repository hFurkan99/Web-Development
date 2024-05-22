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
    internal class CourseFeatureConfiguration : IEntityTypeConfiguration<CourseFeature>
    {
        public void Configure(EntityTypeBuilder<CourseFeature> builder)
        {
            //builder.HasKey(x => x.Id);
            //builder.Property(x => x.Id).UseIdentityColumn();
            //builder.HasOne(x => x.Course).WithOne(x => x.CourseFeature).HasForeignKey<CourseFeature>(x => x.CourseId);
        }
    }
}
