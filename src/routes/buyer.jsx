import { createBrowserRouter } from "react-router-dom";
import BuyerHome from "../pages/Buyer/BuyerHome";
import ProductDetails from "../pages/Buyer/ProductDetails";
import CartPage from "../pages/Buyer/CartPage";
import PrivateRoute from "../components/Buyer/PrivateRoute";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const buyerRouter = createBrowserRouter([
  {
    path: "/",
    element: <BuyerHome />,
  },
  {
    path: "/all-product",
    element: "all product",
  },
  {
    path: "/most-selling-product",
    element: "",
  },
  {
    path: "/product-details/:productId",
    element: (
      <PrivateRoute>
        <ProductDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <CartPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/place-order",
    element: "",
  },
  {
    path: "/order-history",
    element: "",
  },
  {
    path: "/profile",
    element: "",
  },
  {
    path: "/request-for-product",
    element: "",
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/registration",
    element: (
      <>
        <Registration />
      </>
    ),
  },
]);

export default buyerRouter;
