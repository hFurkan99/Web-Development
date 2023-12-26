import { createContext, useEffect, useState, useCallback } from "react";
import agent from "../api/axios";
import { v4 as uuid } from "uuid";

export const MovieContext = createContext({
  //states
  movies: [],
  selectedMovie: {},
  categories: [],
  categorizedMovies: [],
  //sets
  setSelectedMovie: () => {},
  //functions
  loadMovies: () => {},
  loadMovie: () => {},
  handleCategorize: () => {},
  handleDeleteMovie: () => {},
  handleEditOrCreateMovie: () => {},
});

function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [categorizedMovies, setCategorizedMovies] = useState([]);
  const [categories, setCategories] = useState({ genres: [], years: [] });

  //Filmlerin databaseden çekilmesi
  const loadMovies = useCallback(async () => {
    await agent.Movies.list().then((response) => {
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

  //Film oluşturma ya da düzenleme
  const handleEditOrCreateMovie = useCallback(
    async (movie, id) => {
      console.log(id);

      if (id) {
        movie.id = id;
        await agent.Movies.update(movie).then(() => {
          setMovies([...movies.filter((x) => x.id !== id)], movie);
        });
      } else {
        movie.id = uuid();
        await agent.Movies.create(movie).then(() => {
          setMovies([...movies, movie]);
        });
      }
    },
    [movies]
  );

  //Film silme
  const handleDeleteMovie = useCallback(
    async (movie) => {
      await agent.Movies.delete(movie.id).then(() => {
        setMovies([...movies.filter((x) => x.id !== movie.id)]);
      });
    },

    [movies]
  );

  //Kategori elemanlarının bulunması
  useEffect(() => {
    const years = [];
    const genres = [];
    [...movies].map((movie) => {
      if (!years.includes(movie.year)) {
        years.push(movie.year);
      }
      years.sort().reverse();
    });

    [...movies].map((movie) => {
      if (!genres.includes(movie.genre)) {
        genres.push(movie.genre);
      }
      genres.sort();
    });
    setCategories({ genres: genres, years: years });
  }, [movies]);

  //Kategorize edilecek türe göre gelen kategori elemanı kullanılarak kategori sayfasına içerikler aktarıldı
  const handleCategorize = useCallback(
    (category) => {
      let categoryType = "";
      if (categories.genres.includes(category)) {
        categoryType = "genre";
      } else if (categories.years.includes(category)) {
        categoryType = "year";
      }

      const categorized = [...movies].filter(
        (movie) => movie[categoryType] === category
      );
      setCategorizedMovies(categorized);
    },
    [movies, categories]
  );

  const ctxValue = {
    //states
    movies,
    selectedMovie,
    categories,
    categorizedMovies,
    //sets,
    setSelectedMovie,
    //functions
    loadMovies,
    loadMovie,
    handleCategorize,
    handleDeleteMovie,
    handleEditOrCreateMovie,
  };

  return (
    <MovieContext.Provider value={ctxValue}>{children}</MovieContext.Provider>
  );
}

export default MovieContextProvider;
