import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Routes/Root";
import Error from "./Routes/ErrorPage";
import Page404 from "./Routes/Page404";
import Counter from "./App";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/App", element: <Counter /> },
  { path: "*", element: <Page404 /> }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
