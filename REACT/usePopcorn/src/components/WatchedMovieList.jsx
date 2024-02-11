import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched, onDeleteWathcedMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWathcedMovie={onDeleteWathcedMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
