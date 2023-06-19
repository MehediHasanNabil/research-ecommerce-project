import Hero from "./Hero";
import Categories from "./Categories";
import SpecialOffer from "./SpecialOffer";
import Products from "./Products/Products";

export default function BuyerPage() {
  return (
    <>
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
    </>
  );
}
