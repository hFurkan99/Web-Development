import { useContext, useEffect } from "react";
import { MovieContext } from "../store/movie-context";
import MovieCard from "../components/moviesPage/MovieCard";
import Categories from "../components/moviesPage/Categories";
function MoviesPage() {
  const { loadMovies, movies, categories } = useContext(MovieContext);

  useEffect(() => {
    loadMovies();
  }, [loadMovies, movies]);

  return (
    <section id="movies-page">
      <div id="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Categories genres={categories.genres} years={categories.years} />
    </section>
  );
}

export default MoviesPage;
