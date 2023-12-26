import { useNavigate } from "react-router-dom";
import MovieForm from "../forms/MovieForm";
import { convertMoiveToFormData } from "../utils/FormDataUtil";
// import axios from "axios";
import { useContext } from "react";
import { MovieContext } from "../store/movie-context";

function EditMovie() {
  const { handleEditOrCreateMovie, selectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  //Filmi forma çevirip database'e kaydetme
  function create(movie) {
    const formData = convertMoiveToFormData(movie);
    console.log(formData);
    handleEditOrCreateMovie(formData, selectedMovie.id);

    navigate("/movies");
  }

  return (
    <div className="create-movie">
      <h1>Edit Movie</h1>

      <MovieForm model={selectedMovie} onSubmit={(values) => create(values)} />
    </div>
  );
}

export default EditMovie;
