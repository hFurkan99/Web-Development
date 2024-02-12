import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched, onDeleteWathcedMovie, onSelectMovieId }) {
  return (
    <ul className="list list-movies">
      {watched.map((movie) => (
        <WatchedMovie
          onSelectMovieId={onSelectMovieId}
          movie={movie}
          key={movie.imdbID}
          onDeleteWathcedMovie={onDeleteWathcedMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
