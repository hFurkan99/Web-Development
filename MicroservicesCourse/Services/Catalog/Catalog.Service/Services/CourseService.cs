using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Catalog.Core.Repositories;
using Catalog.Core.Services;
using Catalog.Core.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Service.Services
{
    public class CourseService : Service<Course>, ICourseService
    {
        private readonly ICourseRepository _courseRepository;
        private readonly IMapper _mapper;

        public CourseService(IGenericRepository<Course> repository, IUnitOfWork unitOfWork, IMapper mapper, ICourseRepository courseRepository) : base(repository, unitOfWork)
        {
            _mapper = mapper;
            _courseRepository = courseRepository;
        }

        public async Task<CustomResponseDto<List<CourseDto>>> GetAllByUserIdAsync(int userId)
        {
            var courses = await _courseRepository.GetCoursesByUserIdAsync(userId);
            var coursesDto = _mapper.Map<List<CourseDto>>(courses);
            return CustomResponseDto<List<CourseDto>>.Success(200, coursesDto);
        }

        public async Task<CustomResponseDto<List<CourseWithCategoryDto>>> GetCoursesWithCategory()
        {
            var courses = await _courseRepository.GetCoursesWithCategory();
            var coursesDto = _mapper.Map<List<CourseWithCategoryDto>>(courses);
            return CustomResponseDto<List<CourseWithCategoryDto>>.Success(200, coursesDto);
        }

        public async Task<CustomResponseDto<List<CourseDto>>> GetCoursesWithFeatures()
        {
            var courses = await _courseRepository.GetCoursesWithFeatures();
            var coursesDto = _mapper.Map<List<CourseDto>>(courses);
            return CustomResponseDto<List<CourseDto>>.Success(200, coursesDto );
        }
    }
}
