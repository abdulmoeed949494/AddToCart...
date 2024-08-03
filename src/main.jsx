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
import Login from "./components/Login.jsx";
import WishList from "./components/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/wishlist",
    element: <WishList />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
    <RouterProvider router={router} />
    </StateProvider>
      
  </React.StrictMode>
);

