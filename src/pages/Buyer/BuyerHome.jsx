import Categories from "../../components/Buyer/Categories";
import Hero from "../../components/Buyer/Hero";
import Products from "../../components/Buyer/Products";
import SpecialOffer from "../../components/Buyer/SpecialOffer";
import BuyerLayout from "../../components/Layout/BuyerLayout";

export default function BuyerHome() {
  return (
    <BuyerLayout>
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
    </BuyerLayout>
  );
}
