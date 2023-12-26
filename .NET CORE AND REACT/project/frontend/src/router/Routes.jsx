import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesPage from "../pages/MoviesPage";
import MoviePage from "../pages/MoviePage";
import CategoryPage from "../pages/CategoryPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MoviePage /> },
      { path: "movies/categories/:category", element: <CategoryPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
