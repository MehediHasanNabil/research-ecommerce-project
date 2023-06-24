import Hero from "../components/Hero";
import Categories from "../components/Categories";
import SpecialOffer from "../components/SpecialOffer";
import Products from "../components/Products/Products";
import Layout from "../components/Layout/Layout";

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
