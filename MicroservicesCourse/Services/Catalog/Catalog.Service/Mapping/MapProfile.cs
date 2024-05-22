using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;

namespace Catalog.Service.Mapping
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<Course, CourseDto>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<CourseFeature, CourseFeatureDto>().ReverseMap();
            CreateMap<CourseUpdateDto, Course>();
            CreateMap<Course, CourseWithCategoryDto>();
            CreateMap<Category, CategoryWithCoursesDto>();
            CreateMap<CourseCreateDto, Course>();
        }
    }
}
