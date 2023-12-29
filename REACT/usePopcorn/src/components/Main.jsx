import MovieBox from "./MovieBox";
import WatchedBox from "./WatchedBox";

function Main({ movies, watched }) {
  return (
    <main className="main">
      <MovieBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
}

export default Main;
