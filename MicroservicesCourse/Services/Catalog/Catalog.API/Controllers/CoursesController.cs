using Catalog.Core.DTOs;
using Catalog.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Shared.ControllerBases;

namespace Catalog.API.Controllers
{
    public class CoursesController : CustomBaseController
    {
        private readonly ICourseService _courseService;

        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCoursesWithCategories()
        {
            return CreateActionResult(await _courseService.GetCoursesWithCategory());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            return CreateActionResult(await _courseService.GetAllAsync());
        }

        [HttpGet]
        public async Task<IActionResult> GetCourseById(int id)
        {
            return CreateActionResult(await _courseService.GetByIdAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> SaveCourse(CourseCreateDto courseCreateDto)
        {
            return CreateActionResult(await _courseService.AddCourseAsync(courseCreateDto));
        }

        [HttpPost]
        public async Task<IActionResult> UpdateCourse(CourseUpdateDto courseUpdateDto)
        {
            return CreateActionResult(await _courseService.UpdateCourseAsync(courseUpdateDto));
        }

        [HttpGet]
        public async Task<IActionResult> RemoveCourse(int id)
        {
            return CreateActionResult(await _courseService.RemoveAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> SaveRangeCourses(List<CourseDto> courseDtos)
        {
            return CreateActionResult(await _courseService.AddRangeAsync(courseDtos));
        }

        [HttpPost]
        public async Task<IActionResult> RemoveCourses(List<int> ids)
        {
            return CreateActionResult(await _courseService.RemoveRangeAsync(ids));
        }

        [HttpGet]
        public async Task<IActionResult> Any(int id)
        {
            return CreateActionResult(await _courseService.AnyAsync(x => x.Id == id));
        }
    }
}
