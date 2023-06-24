import { Dropdown, Navbar } from "flowbite-react";
import Cart from "./Cart";
import Search from "./Search";
import CartProduct from "./CartProduct";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { toast } from "react-hot-toast";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { switchUserRole } from "../../features/auth/authSlice";
import { useGetCartsQuery } from "../../features/cart/cartApi";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const user = useFirebaseAuth();

  const [totalProduct, setTotalProduct] = useState([]);

  const { isSuccess: isSuccessFetchCarts, data: carts } = useGetCartsQuery();

  const auth = getAuth(app);
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccessFetchCarts) {
      const totalItem = carts?.filter(
        (cart) => cart.user?.email === user?.email
      );
      setTotalProduct(totalItem);
    }
  }, [isSuccessFetchCarts, carts, user]);

  function changeUserRole() {
    dispatch(switchUserRole(role === "buyer" ? "seller" : "buyer"));
  }

  function accountSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("SignOut successfully!");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  }

  return (
    <Navbar
      className="container sticky top-0 z-50 bg-slate-100/90 backdrop-filter backdrop-blur-xl"
      fluid={true}
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ecommerce
        </span>
      </Navbar.Brand>
      <div className="flex justify-end items-center md:w-1/2 md:order-2">
        <Search />

        {user?.displayName ? (
          <>
            {/* cart */}
            <Dropdown arrowIcon={false} inline={true} label={<Cart totalProduct={totalProduct} />}>
              <Dropdown.Header>
                <div className="flex">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Price
                  </h3>
                </div>
              </Dropdown.Header>
              <div className="bg-slate-100 h-80 overflow-y-auto">
                {totalProduct?.length > 0 ? (
                  totalProduct?.map((cart) => (
                    <CartProduct key={cart._id} cart={cart} />
                  ))
                ) : (
                  <h2>Cart is empty</h2>
                )}
              </div>
            </Dropdown>
            {/* profile */}
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <img
                  alt="User"
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full object-cover border-2"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item className="border-2" onClick={changeUserRole}>
                Switch to {role === "buyer" ? "Selling" : "Buying"}
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={accountSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <Link
            className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            to="/login"
          >
            Login
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
