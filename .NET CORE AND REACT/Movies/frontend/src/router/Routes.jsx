import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesPage from "../pages/MoviesPage";
import MoviePage from "../pages/MoviePage";
import CategoryPage from "../pages/CategoryPage";
import CreateMovie from "../pages/CreateMovie";
import EditMovie from "../pages/EditMovie";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MoviePage /> },
      { path: "movies/categories/:category", element: <CategoryPage /> },
      { path: "createMovie", element: <CreateMovie /> },
      { path: "editMovie/:id", element: <EditMovie /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
