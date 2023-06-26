import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import ProductCategory from "../pages/admin/ProductCategory";
import ManageProducts from "../pages/Admin/ManageProducts";
import ManageOrder from "../pages/Admin/ManageOrder";
import AllUser from "../pages/Admin/AllUser";
import Inbox from "../pages/Admin/Inbox";
import ErrorPage from "../pages/ErrorPage";

const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manage-products",
    element: <ManageProducts />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/manage-order",
    element: <ManageOrder />,
  },
  {
    path: "/product-category",
    element: <ProductCategory />,
  },
  {
    path: "/all-user",
    element: <AllUser />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
]);

export default adminRouter;
