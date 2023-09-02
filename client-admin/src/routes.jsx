import { createBrowserRouter, redirect } from "react-router-dom";
import Movie from "./Views/Movie";
import Genre from "./Views/Genre";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Layout from "./components/Layout";
import MovieForm from "./Views/MovieForm";
import GenreForm from "./Views/GenreForm";

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "/",
        element: <Movie />,
      },
      {
        path: "/create-movies",
        element: <MovieForm />,
      },
      {
        path: "/edit-movies/:id",
        element: <MovieForm />,
      },
      {
        path: "/genres",
        element: <Genre />,
      },
      {
        path: "/create-genres",
        element: <GenreForm />,
      },
      {
        path: "/edit-genres/:id",
        element: <GenreForm />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) throw redirect("/");
      return null;
    },
    element: <Login />,
  },
]);

export default router;
