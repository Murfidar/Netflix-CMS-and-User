import { createBrowserRouter} from "react-router-dom";
import Home from "./Views/Home";
import Layout from "./components/Layout";
import CardDetail from "./Views/CardDetail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movies/:movieId",
        element: <CardDetail />,
      },
    ],
  },
]);

export default router;
