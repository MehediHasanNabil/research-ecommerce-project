import "flowbite";
import "./App.css"
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Toaster } from "react-hot-toast";
import Products from "./pages/admin/Products";
import ProductCategory from "./pages/admin/ProductCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-details/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/admin",
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-category",
        element: <ProductCategory/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
