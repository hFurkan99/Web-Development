import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../store/movie-context";
import MovieCard from "../components/moviesPage/MovieCard";
import Categories from "../components/moviesPage/Categories";
function CategoryPage() {
  const { category } = useParams();
  const { categories, categorizedMovies, handleCategorize } =
    useContext(MovieContext);

  console.log(categories.genres);

  useEffect(() => {
    if (categorizedMovies.length == 0) {
      handleCategorize(category);
    }
  }, [handleCategorize]);

  return (
    <section id="movies-page">
      <div className="p-5" id="movies">
        <h1 className="text-white ">{category} Movies</h1>
        {categorizedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Categories genres={categories.genres} years={categories.years} />
    </section>
  );
}

export default CategoryPage;
