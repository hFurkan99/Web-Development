using AutoMapper;
using Catalog.Core.DTOs;
using Catalog.Core.Models;
using Catalog.Core.Services;
using Catalog.Service.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.API.Controllers
{
    public class CoursesController : CustomBaseController
    {
        private readonly ICourseService _courseService;
        private readonly IMapper _mapper;

        public CoursesController(ICourseService courseService, IMapper mapper)
        {
            _courseService = courseService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetCoursesWithCategory() 
        {
            return CreateActionResult(await _courseService.GetCoursesWithCategory());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await _courseService.GetAllAsync();
            var coursesDto = _mapper.Map<List<CourseDto>>(courses);
            return CreateActionResult(CustomResponseDto<List<CourseDto>>.Success(200, coursesDto));
        }

        [HttpGet]
        public async Task<IActionResult> GetCourseById(int id)
        {
            var course = await _courseService.GetByIdAsync(id);
            var courseDto = _mapper.Map<CourseDto>(course);
            return CreateActionResult(CustomResponseDto<CourseDto>.Success(200, courseDto));
        }

        [HttpPost]
        public async Task<IActionResult> CourseSave(CourseCreateDto courseCreateDto)
        {
            var course = await _courseService.AddAsync(_mapper.Map<Course>(courseCreateDto));
            var courseDto = _mapper.Map<CourseDto>(course);
            return CreateActionResult(CustomResponseDto<CourseDto>.Success(201, courseDto));
        }


        [HttpPost]
        public async Task<IActionResult> CourseUpdate(CourseUpdateDto courseUpdateDto)
        {
            try
            {
                await _courseService.UpdateAsync(_mapper.Map<Course>(courseUpdateDto));
                return CreateActionResult(CustomResponseDto<NoContentDto>.Success(204));
            }
            catch
            {
                throw new NotFoundExcepiton();
            }
            
        }

        [HttpGet]
        public async Task<IActionResult> CourseRemove(int courseId)
        {
            var course = await _courseService.GetByIdAsync(courseId);
            await _courseService.RemoveAsync(course);
            return CreateActionResult(CustomResponseDto<NoContentDto>.Success(204));
        }

        [HttpGet]
        public async Task<IActionResult> GetCoursesWithFeatures()
        {
            return CreateActionResult(await _courseService.GetCoursesWithFeatures());
        }
    }
}
