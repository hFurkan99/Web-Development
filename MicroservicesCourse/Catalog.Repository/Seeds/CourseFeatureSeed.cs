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
    internal class CourseFeatureSeed : IEntityTypeConfiguration<CourseFeature>
    {
   
        public void Configure(EntityTypeBuilder<CourseFeature> builder)
        {
            builder.HasData(
                new CourseFeature { Id = 1, CourseId = 1, Duration = 15 },
                new CourseFeature { Id = 2, CourseId = 2, Duration = 20},
                new CourseFeature { Id = 3, CourseId = 3, Duration = 30});
        }
    }
}
