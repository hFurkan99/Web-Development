import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../store/movie-context";
import MovieInfos from "../components/moviePage/MovieInfos";

function MoviePage() {
  const { loadMovie } = useContext(MovieContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadMovie(id);
    }
  }, [id, loadMovie]);

  return (
    <section id="movie-page">
      <MovieInfos />
    </section>
  );
}

export default MoviePage;
