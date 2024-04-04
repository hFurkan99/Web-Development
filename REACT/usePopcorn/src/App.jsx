import { useState, useCallback } from "react";
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
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const handleCloseMoiveDetails = useCallback(
    () => setSelectedMovieId(null),
    []
  );
  const { movies, isLoading, error } = useMovies(
    query,
    handleCloseMoiveDetails
  );

  const handleSelectMovieId = (id) => {
    setSelectedMovieId((prevSelectedMovieId) =>
      id === prevSelectedMovieId ? null : id
    );
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
            <MovieList
              itemsPerPage={8}
              onSelectMovieId={handleSelectMovieId}
              movies={movies}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {!selectedMovieId ? (
            <>
              <WatchedMovieSummary watched={watched} />
              <WatchedMovieList
                itemsPerPage={6}
                onDeleteWathcedMovie={handleDeleteWatchedMovie}
                onSelectMovieId={handleSelectMovieId}
                watched={watched}
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
