import { useState } from "react";
import { tempMovieData } from "./data/MovieData";
import { tempWatchedData } from "./data/WatchedData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResult from "./components/NumResult";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMovieSummary from "./components/WatchedMovieSummary";
import WatchedMovieList from "./components/WatchedMovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedMovieSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
