import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResult from "./components/NumResult";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMovieSummary from "./components/WatchedMovieSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { tempWatchedData } from "./data/WatchedData";

const KEY = "8f0cd8b6";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) throw new Error("Failed to fetch!");

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }

        setMovies(data.Search);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  const handleSelectMovieId = (id) => {
    setSelectedMovieId((prevSelectedMovieId) =>
      id === prevSelectedMovieId ? null : id
    );
  };

  const handleCloseMoiveDetails = () => {
    setSelectedMovieId(null);
  };

  const handleAddWatchedMovieList = (watchedMovie) => {
    console.log(watched);
    console.log(watchedMovie);
    setWatched((prevWatched) => [...prevWatched, watchedMovie]);
  };

  const handleDeleteWatchedMovie = (selectedMovieId) => {
    console.log(selectedMovieId);
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID != selectedMovieId)
    );
  };

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList onSelectMovieId={handleSelectMovieId} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {!selectedMovieId ? (
            <>
              <WatchedMovieSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWathcedMovie={handleDeleteWatchedMovie}
              />
            </>
          ) : (
            <MovieDetails
              selectedMovieId={selectedMovieId}
              onCloseMoiveDetails={handleCloseMoiveDetails}
              onAddWatchedMovieList={handleAddWatchedMovieList}
              watchedMovies={watched}
            />
          )}
        </Box>
      </Main>
    </>
  );
}
