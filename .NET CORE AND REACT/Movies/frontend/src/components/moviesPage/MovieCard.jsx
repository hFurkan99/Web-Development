import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../store/movie-context";
function MovieCard({ movie }) {
  const { setSelectedMovie, selectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  function handleSetSelectedMovie(movie) {
    setSelectedMovie(movie);
    navigate(`/movies/${selectedMovie.id}`);
  }

  return (
    <Card id="movie-card">
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text id="movie-card-desc">{movie.description}</Card.Text>
        <Button
          id="movie-card-button"
          as={Link}
          to={`/movies/${movie.id}`}
          variant="light"
          onClick={() => handleSetSelectedMovie(movie)}
        >
          Go to the movie page
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
