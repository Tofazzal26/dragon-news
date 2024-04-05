import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDatails/NewsDetails";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <NewsDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
