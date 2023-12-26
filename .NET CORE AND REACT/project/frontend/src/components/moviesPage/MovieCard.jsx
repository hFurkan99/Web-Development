import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieImg from "../../../public/assets/movie.jpeg";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Card id="movie-card">
      <Card.Img variant="top" src={MovieImg} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text id="movie-card-desc">{movie.description}</Card.Text>
        <Button
          id="movie-card-button"
          as={Link}
          to={`/movies/${movie.id}`}
          variant="light"
        >
          Go to the movie page
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
