import { useContext } from "react";
import { MovieContext } from "../store/movie-context";
import MovieCard from "../components/moviesPage/MovieCard";
import Categories from "../components/moviesPage/Categories";
function MoviesPage() {
  const { movies } = useContext(MovieContext);

  //Databasedeki film türlerini ve yıllarını yeni dizilere kaydettim.
  const movieGenres = [];

  [...movies].map((movie) => {
    if (!movieGenres.includes(movie.genre)) {
      movieGenres.push(movie.genre);
    }
    movieGenres.sort();
  });

  const movieYears = [];

  [...movies].map((movie) => {
    if (!movieYears.includes(movie.year)) {
      movieYears.push(movie.year);
    }
    movieYears.sort().reverse();
  });

  return (
    <section id="movies-page">
      <div id="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Categories genres={movieGenres} years={movieYears} />
    </section>
  );
}

export default MoviesPage;
