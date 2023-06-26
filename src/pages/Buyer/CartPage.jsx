import CartProductItems from "../../components/Buyer/CartProductItems";
import BuyerLayout from "../../components/Layout/BuyerLayout";

export default function CartPage() {
  return (
    <BuyerLayout>
      <div className="py-5">
        <CartProductItems className="w-full h-auto" />
      </div>
    </BuyerLayout>
  );
}
