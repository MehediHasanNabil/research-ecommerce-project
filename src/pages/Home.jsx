import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import BuyerPage from "../components/BuyerPage";
import SellingDashboard from "../components/SellingDashboard";

export default function Home() {
  const { role } = useSelector((state) => state.auth);

  return (
    <Layout>{role === "buyer" ? <BuyerPage /> : <SellingDashboard />}</Layout>
  );
}
