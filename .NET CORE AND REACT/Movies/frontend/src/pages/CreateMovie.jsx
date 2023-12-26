import { useNavigate } from "react-router-dom";
import MovieForm from "../forms/MovieForm";
import { convertMoiveToFormData } from "../utils/FormDataUtil";
// import axios from "axios";
import { useContext } from "react";
import { MovieContext } from "../store/movie-context";

function CreateMovie() {
  const { handleEditOrCreateMovie, setSelectedMovie } =
    useContext(MovieContext);
  const navigate = useNavigate();
  //Filmi forma çevirip database'e kaydetme
  function create(movie) {
    const formData = convertMoiveToFormData(movie);
    handleEditOrCreateMovie(formData);
    setSelectedMovie({});
    navigate("/movies");
  }

  return (
    <div className="create-movie">
      <h1>Create Movie</h1>

      <MovieForm model={{}} onSubmit={(values) => create(values)} />
    </div>
  );
}

export default CreateMovie;
