import { Button, Rating } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { title, price, thumbnail, id } = product || {};
  return (
    <div className="shadow p-4 rounded-md flex flex-col justify-between transition-all hover:scale-110 hover:shadow-xl">
      <div>
        <img src={thumbnail} alt={title} />
        <Link to={`/product-details/${id}`}>
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
        <Button size="xs">Add to cart</Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
