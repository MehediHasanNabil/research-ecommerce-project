import Hero from "../components/Buyer/Hero";
import Categories from "../components/Buyer/Categories";
import SpecialOffer from "../components/Buyer/SpecialOffer";
import Products from "../components/Buyer/Products";
import Layout from "../components/Layout/BuyerLayout";

export default function BuyerPage() {
  return (
    <Layout>
      <Hero />
      <Categories />
      <div className="grid grid-cols-12 gap-8 mt-5">
        <div className="col-span-12 md:col-span-4">
          <SpecialOffer />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Products />
        </div>
      </div>
    </Layout>
  );
}
