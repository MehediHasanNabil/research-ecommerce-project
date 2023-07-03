import PropTypes from "prop-types";
import { useGetProductsQuery } from "../../features/product/productApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Error from "./Error";
import ProductItem from "./ProductItem";

export default function Products({ type }) {
  const { user } = useSelector((state) => state.auth);
  const {
    data,
    isSuccess: isSuccessFetchProducts,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();

  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (isSuccessFetchProducts && data.length > 0) {
      if (type === "admin") {
        const result = data?.slice();
        setFilterProducts(result);
      } else {
        const result = data?.filter(
          (product) => product?.user?.email === user?.email
        );
        setFilterProducts(result);
      }
    }
  }, [isSuccessFetchProducts, data, type, user]);

  let content;

  if (isSuccessFetchProducts && data.length > 0) {
    content = filterProducts?.map((product, index) => (
      <ProductItem key={product._id} index={index} product={product} />
    ));
  } else if (isSuccessFetchProducts && data.length === 0) {
    content = <h2 className="text-lg">No Products here.</h2>;
  } else if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <Error message={error} />;
  } else {
    content = <h2 className="text-lg">Something was wrong.</h2>;
  }

  return (
    <div className="pt-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
}

Products.propTypes = {
  type: PropTypes.string.isRequired,
};
