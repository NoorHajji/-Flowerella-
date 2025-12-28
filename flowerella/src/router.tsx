import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/prouduct";
import Login from "./pages/login";
import Stories from "./pages/stories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "stories", element: <Stories /> },
    ],
  },
]);

