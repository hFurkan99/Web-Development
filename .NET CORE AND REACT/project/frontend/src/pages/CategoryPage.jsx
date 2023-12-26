import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../store/movie-context";
import MovieCard from "../components/moviesPage/MovieCard";
function CategoryPage() {
  const { category } = useParams();
  const { categorizedMovies, handleCategorize } = useContext(MovieContext);

  useEffect(() => {
    if (categorizedMovies.length == 0) {
      handleCategorize(category);
    }
  }, [handleCategorize]);

  return (
    <section id="category-page">
      <div className="p-5" id="movies">
        <h1 className="text-white ">{category} Movies</h1>
        {categorizedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
