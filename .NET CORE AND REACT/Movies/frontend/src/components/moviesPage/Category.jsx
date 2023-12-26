import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../store/movie-context";
function Category({ title, category }) {
  const { handleCategorize } = useContext(MovieContext);
  return (
    <div id="category-list">
      <h1>{title.toUpperCase() + "S"}</h1>
      <ul>
        {category.map((x, index) => (
          <NavLink
            onClick={() => handleCategorize(x)}
            to={`/movies/categories/${x}`}
            id="category-links"
            key={index}
          >
            <li>{x}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Category;
