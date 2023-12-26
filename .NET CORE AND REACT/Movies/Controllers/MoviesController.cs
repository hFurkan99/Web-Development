using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.Domain;
using Movies.DTOs;
using Movies.Helpers;
using Persistence;

namespace Movies.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IFileStorageService _fileStorageService;
        private readonly IMapper _mapper;
        private readonly string containerName = "movies";

        public MoviesController(
            IMapper mapper,
            DataContext context,
            IFileStorageService fileStorageService
        )
        {
            _mapper = mapper;
            _context = context;
            _fileStorageService = fileStorageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieDTO>>> Get()
        {
            var movies = await _context.Movies.ToListAsync();
            return _mapper.Map<List<MovieDTO>>(movies); //MovieDTO'ya çeviriyor
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MovieDTO>> Get(Guid id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == id);

            if (movie == null)
            {
                return NotFound();
            }
            return _mapper.Map<MovieDTO>(movie);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] MovieCreationDTO movieCreationDTO)
        {
            var movie = _mapper.Map<Movie>(movieCreationDTO);

            if (movieCreationDTO.Poster != null)
            {
                movie.Poster = await _fileStorageService.SaveFile(
                    containerName,
                    movieCreationDTO.Poster
                );
            }

            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromForm] MovieCreationDTO movieCreationDTO, Guid id)
        {
            var newMovie = _mapper.Map<Movie>(movieCreationDTO);
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == id);

            movie.Name = newMovie.Name;
            movie.Description = newMovie.Description;
            movie.Rating = newMovie.Rating;
            movie.Genre = newMovie.Genre;
            movie.Year = newMovie.Year;
            movie.RunTime = newMovie.RunTime;
            movie.Director = newMovie.Director;

            movie.Poster = await _fileStorageService.SaveFile(
                containerName,
                movieCreationDTO.Poster
            );

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == id);

            if (movie == null)
            {
                return NotFound();
            }
            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
