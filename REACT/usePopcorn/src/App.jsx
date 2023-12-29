import { useState } from "react";
import { tempMovieData } from "./data/MovieData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResult from "./components/NumResult";
import Search from "./components/Search";
import MovieBox from "./components/MovieBox";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        <MovieBox>
          <MovieList movies={movies} />
        </MovieBox>
      </Main>
    </>
  );
}
