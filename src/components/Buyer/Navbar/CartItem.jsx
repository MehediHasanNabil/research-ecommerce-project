import PropTypes from "prop-types";
import {
  useIncrementAndDecrementCartMutation,
  useRemoveProductFromCartMutation,
} from "../../../features/cart/cartApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function CartItem({ cart }) {
  const { _id } = cart || {};
  const { _id: cartItemId } = cart?.cart_item || {};
  const { title, thumbnail, category, price } = cart?.cart_item?.product || {};

  console.log(cart?.cart_item)

  const [removeProductFromCart, { isSuccess: isSuccessRemoveProductFromCart }] =
    useRemoveProductFromCartMutation();

  const [
    incrementAndDecrementCart,
    { isSuccess: isSuccessIncrementAndDecrementCart },
  ] = useIncrementAndDecrementCartMutation();

  useEffect(() => {
    if (isSuccessRemoveProductFromCart) {
      toast.success("Remove from cart.");
    }
  }, [isSuccessRemoveProductFromCart]);

  useEffect(() => {
    if (isSuccessIncrementAndDecrementCart) {
      toast.success("Product count increment.");
    }
  }, [isSuccessIncrementAndDecrementCart]);

  function handleRemoveToCart(cartId) {
    if (cartId) {
      removeProductFromCart({ cartId, cartItemId });
    }
  }

  function increaseProductCount() {
    incrementAndDecrementCart({
      type: "increment",
    });
  }

  function decreaseProductCount() {
    alert("decreaseProductCount");
  }

  return (
    <div className="flex items-center bg-transparent hover:bg-gray-200 px-6 py-5">
      <div className="flex w-3/5">
        <div className="">
          <img className="w-32 object-cover" src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{category?.name}</span>
          <button
            onClick={() => handleRemoveToCart(_id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={decreaseProductCount}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>

        <input
          className="mx-2 border text-center w-12"
          type="text"
          defaultValue={cart?.cart_item?.quantity}
        />

        <button onClick={increaseProductCount}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
    </div>
  );
}

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
};
