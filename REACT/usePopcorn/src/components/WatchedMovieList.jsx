import WatchedMovie from "./WatchedMovie";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export function PaginatedWatchedMovies({
  currentMovies,
  onDeleteWathcedMovie,
  onSelectMovieId,
}) {
  return (
    <ul className="list list-movies">
      {currentMovies &&
        currentMovies.map((movie) => (
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

export default function WatchedMovieList({
  watched,
  itemsPerPage,
  onDeleteWathcedMovie,
  onSelectMovieId,
}) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = watched.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(watched.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % watched.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <PaginatedWatchedMovies
        currentMovies={currentItems}
        onDeleteWathcedMovie={onDeleteWathcedMovie}
        onSelectMovieId={onSelectMovieId}
      />
      <ReactPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
