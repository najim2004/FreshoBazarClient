import { createBrowserRouter } from "react-router-dom";
import { Route } from "../types/routes";
import { App } from "../App";
import { Home } from "../pages/home/Home";
import { ProductPage } from "@/pages/product/ProductPage";
import { ShoppingCart } from "@/pages/cart/ShoppingCart";
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
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
