import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { MovieContext } from "../../store/movie-context";
import MovieImg from "../../../public/assets/movie.jpeg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieInfos() {
  const { selectedMovie, handleCategorize } = useContext(MovieContext);

  return (
    <section id="movie-infos">
      <div id="movie-infos-header">
        <h1>{selectedMovie.name}</h1>
        <div className="d-flex">
          <h4>{selectedMovie.year + " - " + selectedMovie.runTime}</h4>
          <h1 className="ms-auto mb-3">
            <FaStar color="yellow" className="me-2 mb-2 " />
            {selectedMovie.rating}
          </h1>
        </div>

        <img src={MovieImg} alt="" />
        <Button
          as={Link}
          to={`/movies/categories/${selectedMovie.genre}`}
          onClick={() => handleCategorize(selectedMovie.genre)}
          variant="outline-light"
        >
          {selectedMovie.genre}
        </Button>
      </div>

      <ul id="movie-infos-list">
        <li className="mb-5 fst-italic ">{selectedMovie.description}</li>
        <li>Director</li>

        <li className="mt-1 fs-3">{selectedMovie.director}</li>
        <Button className="mt-5 float-end " variant="outline-warning">
          Manage Movie
        </Button>
      </ul>
    </section>
  );
}

export default MovieInfos;
