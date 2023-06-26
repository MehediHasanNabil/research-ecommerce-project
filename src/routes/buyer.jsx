import { createBrowserRouter } from "react-router-dom";
import BuyerHome from "../pages/Buyer/BuyerHome";
import ProductDetails from "../pages/Buyer/ProductDetails";
import CartPage from "../pages/Buyer/CartPage";

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
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <CartPage />,
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
]);

export default buyerRouter;
