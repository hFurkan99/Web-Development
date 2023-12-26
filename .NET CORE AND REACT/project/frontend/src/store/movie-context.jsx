import { createContext, useEffect, useState, useCallback } from "react";
import agent from "../api/axios";

export const MovieContext = createContext({
  //states
  movies: [],
  selectedMovie: {},
  categorizedMovies: [],

  //functions
  loadMovie: () => {},
  handleCategorize: () => {},
});

function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [categorizedMovies, setCategorizedMovies] = useState([]);

  useEffect(() => {
    agent.Movies.list().then((response) => {
      setMovies(response);
    });
  }, []);

  //Seçilen film
  const loadMovie = useCallback(
    async (id) => {
      if (selectedMovie.id !== id) {
        await agent.Movies.detail(id).then((response) => {
          setSelectedMovie(response);
        });
      }
    },
    [selectedMovie]
  );
  //Türe göre kategorize edilmiş filmler
  const handleCategorize = useCallback(
    (category) => {
      const categorized = [...movies].filter(
        (movie) => movie.genre === category
      );
      setCategorizedMovies(categorized);
    },
    [movies]
  );

  const ctxValue = {
    //states
    movies,
    selectedMovie,
    categorizedMovies,
    //functions
    loadMovie,
    handleCategorize,
  };

  return (
    <MovieContext.Provider value={ctxValue}>{children}</MovieContext.Provider>
  );
}

export default MovieContextProvider;
