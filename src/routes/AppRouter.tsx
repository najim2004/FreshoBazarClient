import { createBrowserRouter } from "react-router-dom";
import { Route } from "../types/routes";
import { App } from "../App";
import { Home } from "../pages/home/Home";
const routes: Route[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Home />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
