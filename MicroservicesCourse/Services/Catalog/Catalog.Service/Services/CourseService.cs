using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Catalog.Core.Repositories;
using Catalog.Core.Services;
using Catalog.Core.UnitOfWorks;
using Microsoft.AspNetCore.Http;
using Shared.DTOs;

namespace Catalog.Service.Services
{
    public class CourseService : Service<Course, CourseDto>, ICourseService
    {
        private readonly ICourseRepository _courseRepository;

        public CourseService(IGenericRepository<Course> repository, IUnitOfWork unitOfWork, IMapper mapper, ICourseRepository courseRepository) : base(repository, unitOfWork, mapper)
        {
            _courseRepository = courseRepository;
        }

        public async Task<CustomResponseDto<CourseDto>> AddCourseAsync(CourseCreateDto dto)
        {
            var newEntity = _mapper.Map<Course>(dto);
            await _courseRepository.AddAsync(newEntity);
            await _unitOfWork.CommitAsync();
            var newDto = _mapper.Map<CourseDto>(newEntity);
            return CustomResponseDto<CourseDto>.Success(StatusCodes.Status201Created, newDto);
        }

        public async Task<CustomResponseDto<List<CourseDto>>> GetAllByUserIdAsync(int userId)
        {
            var courses = await _courseRepository.GetCoursesByUserIdAsync(userId);
            var coursesDto = _mapper.Map<List<CourseDto>>(courses);
            return CustomResponseDto<List<CourseDto>>.Success(StatusCodes.Status200OK, coursesDto);
        }

        public async Task<CustomResponseDto<List<CourseWithCategoryDto>>> GetCoursesWithCategory()
        {
            var courses = await _courseRepository.GetCoursesWithCategory();
            var coursesDto = _mapper.Map<List<CourseWithCategoryDto>>(courses);
            return CustomResponseDto<List<CourseWithCategoryDto>>.Success(StatusCodes.Status200OK, coursesDto);
        }

        public async Task<CustomResponseDto<List<CourseDto>>> GetCoursesWithFeatures()
        {
            var courses = await _courseRepository.GetCoursesWithFeatures();
            var coursesDto = _mapper.Map<List<CourseDto>>(courses);
            return CustomResponseDto<List<CourseDto>>.Success(StatusCodes.Status200OK, coursesDto );
        }

        public async Task<CustomResponseDto<NoContentDto>> UpdateCourseAsync(CourseUpdateDto dto)
        {
            var entity = _mapper.Map<Course>(dto);
            _courseRepository.Update(entity);
            await _unitOfWork.CommitAsync();
            return CustomResponseDto<NoContentDto>.Success(StatusCodes.Status204NoContent);
        }
    }
}
