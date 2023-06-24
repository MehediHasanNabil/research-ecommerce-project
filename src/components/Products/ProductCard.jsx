import { Button, Rating } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useAddToCartMutation } from "../../features/cart/cartApi";

export default function ProductCard({ product }) {
  const user = useFirebaseAuth();
  const [addProductToCart, { isSuccess: isSuccessAddProductToCart }] =
    useAddToCartMutation();
  const { _id, title, price, thumbnail } = product || {};

  useEffect(() => {
    if (isSuccessAddProductToCart) {
      toast.success("Product add successfully!");
    }
  }, [isSuccessAddProductToCart]);

  function handleAddToCart(product_id) {
    addProductToCart({
      product_id,
      email: user.email,
    });
  }

  return (
    <div className="shadow p-4 rounded-md flex flex-col justify-between transition-all hover:scale-110 hover:shadow-xl">
      <div>
        <img src={thumbnail} alt={title} />
        <Link to={`/product-details/${_id}`}>
          <h3 className="font-semibold text-lg line-clamp-2 my-1">{title}</h3>
        </Link>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
      </div>

      <div className="flex justify-between py-3">
        <p className="text-2xl font-semibold">$ {price}</p>
        <Button onClick={() => handleAddToCart(_id)} size="xs">
          Add to cart
        </Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
