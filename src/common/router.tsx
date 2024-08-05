import { Card } from "../components/Card/Card";
import Login from "../pages/Login/Login";
import Root from "../Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/redux-todos/",
    element: <Root />,

    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Login />,
        // loader: teamLoader,
      },
      {
        path: "/redux-todos/Todos",
        element: <Card />,
        // loader: teamLoader,
      },
      {
        path: "/redux-todos/Login",
        element: <Login />,
        // loader: teamLoader,
      },
    ],
  },
]);
