import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SellerHome from "../pages/Seller/SellerHome";

const sellerRouter = createBrowserRouter([
  {
    path: "/",
    element: <SellerHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-product",
    element: "",
  },
  {
    path: "/product-order",
    element: "",
  },
  {
    path: "/earning",
    element: "",
  },
]);

export default sellerRouter;
