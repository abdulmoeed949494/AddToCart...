import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cart from "./components/Cart.jsx";
import StateProvider from "./state.jsx";
import Product from "./components/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />
  },
  {
    path: "/cart",
    element: <Cart />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
    <RouterProvider router={router} />
    </StateProvider>
      
  </React.StrictMode>
);

