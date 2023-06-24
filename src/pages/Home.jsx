import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import BuyerPage from "./BuyerPage";
import SellingDashboard from "./SellingDashboard";

export default function Home() {
  const { role } = useSelector((state) => state.auth);

  return (
    <>{role === "buyer" ? <BuyerPage /> : <SellingDashboard />}</>
  );
}
