import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products/Products";
import SpecialOffer from "../components/SpecialOffer";

export default function Home() {
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
