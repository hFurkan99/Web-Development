import Movie from "./Movie";

function MovieList({ movies, onSelectMovieId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovieId={onSelectMovieId}
        />
      ))}
    </ul>
  );
}

export default MovieList;
