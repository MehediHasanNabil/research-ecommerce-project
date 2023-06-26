import "flowbite";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import adminRouter from "./routes/admin";
import sellerRouter from "./routes/seller";
import buyerRouter from "./routes/buyer";
import { useState } from "react";


export default function App() {
  // const [router, setrouter] = useState(adminRouter);
  // const [router, setrouter] = useState(sellerRouter);
  const [router, setrouter] = useState(buyerRouter);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
