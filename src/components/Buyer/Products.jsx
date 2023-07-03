import { useGetProductsQuery } from "../../features/product/productApi";
import ProductCard from "./ProductCard";

export default function Products() {
  const { isSuccess, data: products } = useGetProductsQuery();

  let content;

  if (isSuccess && products?.length > 0) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div>
      <h2 className="text-4xl font-bold my-8">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">{content}</div>
    </div>
  );
}
