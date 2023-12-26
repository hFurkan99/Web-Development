import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ActivityDashboard from "../components/ActivityDashboard/ActivityDashboard";
import ActivityForm from "../components/Forms/ActivityForm";
import ActivityDetails from "../components//ActivityDetails/ActivityDetails";
import NotFound from "../components/errors/NotFound";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      //Root değiştiğinde sayfa tekrar renderlansın diye key eklendi.
      { path: "editActivity/:id", element: <ActivityForm key="edit" /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
