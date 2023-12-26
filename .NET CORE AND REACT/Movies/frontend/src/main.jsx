import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieContextProvider from "./store/movie-context.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieContextProvider>
      <RouterProvider router={router} />
    </MovieContextProvider>
  </React.StrictMode>
);
