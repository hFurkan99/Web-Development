import { useState, useEffect } from "react";
import NoPoster from "../../public/NoPoster.png";

export function useMovies(query, callback) {
  const KEY = "8f0cd8b6";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch!");

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        console.log(data.Search);
        const withPosterForNoPosterDatas = data.Search.map((movie) => {
          return {
            ...movie,
            Poster: movie.Poster === "N/A" ? NoPoster : movie.Poster,
          };
        });
        setMovies(withPosterForNoPosterDatas);
        setError("");
      } catch (error) {
        console.log(error);
        if (error.name !== "AbortError") setError(error.message);
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

    return () => {
      controller.abort();
    };
  }, [query, callback]);

  return { movies, isLoading, error };
}
