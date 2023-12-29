import { useState } from "react";
import { tempMovieData } from "./data/MovieData";
import { tempWatchedData } from "./data/WatchedData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} watched={watched} />
    </>
  );
}
