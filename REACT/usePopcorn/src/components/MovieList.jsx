import Movie from "./Movie";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export function PaginatedMovies({ currentMovies, onSelectMovieId }) {
  return (
    <ul className="list list-movies">
      {currentMovies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovieId={onSelectMovieId}
        />
      ))}
    </ul>
  );
}

export default function MovieList({ movies, itemsPerPage, onSelectMovieId }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
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
      <PaginatedMovies
        currentMovies={currentItems}
        onSelectMovieId={onSelectMovieId}
      />
    </div>
  );
}
