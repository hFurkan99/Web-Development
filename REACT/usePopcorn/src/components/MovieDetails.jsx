import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";
const KEY = "8f0cd8b6";

function MovieDetails({
  selectedMovieId,
  onCloseMoiveDetails,
  onAddWatchedMovieList,
  watchedMovies,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [wasAdded, setWasAdded] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      setWasAdded(false);
      setUserRating(0);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
      );
      const data = await res.json();
      const watched = watchedMovies.find(
        (movie) => movie.imdbID == selectedMovieId
      );
      if (watched) {
        setUserRating(watched.userRating);
        setWasAdded(true);
      }
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedMovieId, watchedMovies]);

  const handleAddWatchedMovieList = () => {
    if (watchedMovies.find((movie) => movie.imdbID == selectedMovieId)) {
      return;
    }
    const newWatchedMovie = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: isNaN(Number(runtime.split(" ").at(0)))
        ? 0
        : Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatchedMovieList(newWatchedMovie);
    onCloseMoiveDetails();
  };

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <button className="btn-back" onClick={onCloseMoiveDetails}>
            &larr;
          </button>
          <header>
            <img src={poster} alt={`Poster of ${movie} movie.`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>🌟</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                size={25}
                onSetRating={setUserRating}
                defaultRating={userRating}
              />
              {userRating > 0 && !wasAdded && (
                <button className="btn-add" onClick={handleAddWatchedMovieList}>
                  ADD LIST
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
