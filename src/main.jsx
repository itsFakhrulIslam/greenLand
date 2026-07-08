import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import Gellary from "./components/Gellary.jsx";
import Plant from "./components/Plant.jsx";

// router setup is here
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: About },
      { path: "gellary", Component: Gellary },
      { path: "plantation", Component: Plant },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
