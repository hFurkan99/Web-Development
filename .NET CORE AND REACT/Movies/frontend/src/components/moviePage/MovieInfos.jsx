import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { MovieContext } from "../../store/movie-context";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieInfos() {
  const { selectedMovie, handleCategorize, handleDeleteMovie } =
    useContext(MovieContext);
  const navigate = useNavigate();
  console.log(selectedMovie);
  function handleDelete(selectedMovie) {
    handleDeleteMovie(selectedMovie);
    navigate("/movies");
  }

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

        <img src={selectedMovie.poster} alt="" />
        <Button
          className="me-4"
          as={Link}
          to={`/movies/categories/${selectedMovie.genre}`}
          onClick={() => handleCategorize(selectedMovie.genre)}
          variant="outline-light"
        >
          {`Go to other ${selectedMovie.genre} movies`}
        </Button>
        <Button
          as={Link}
          to={`/movies/categories/${selectedMovie.year}`}
          onClick={() => handleCategorize(selectedMovie.year)}
          variant="outline-light"
        >
          {`Go to other ${selectedMovie.year} movies`}
        </Button>
      </div>

      <ul id="movie-infos-list">
        <li className="mb-5 fst-italic ">{selectedMovie.description}</li>
        <li>Director</li>

        <li className="mt-1 fs-3">{selectedMovie.director}</li>
        <div>
          <Button
            as={Link}
            to={`/editMovie/${selectedMovie.id}`}
            type="button"
            className="mt-5 ms-3 float-end "
            variant="outline-warning"
          >
            Edit Movie
          </Button>
          <Button
            type="button"
            onClick={() => handleDelete(selectedMovie)}
            className="mt-5 float-end "
            variant="outline-danger"
          >
            Delete Movie
          </Button>
        </div>
      </ul>
    </section>
  );
}

export default MovieInfos;
