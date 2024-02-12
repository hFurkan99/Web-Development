function WatchedMovie({ movie, onDeleteWathcedMovie, onSelectMovieId }) {
  return (
    <li className="watchedMoive" onClick={() => onSelectMovieId(movie.imdbID)}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <p></p>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteWathcedMovie(movie.imdbID)}
      >
        ➖
      </button>
    </li>
  );
}

export default WatchedMovie;
