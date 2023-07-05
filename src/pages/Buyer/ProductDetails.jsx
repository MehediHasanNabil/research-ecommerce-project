import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/BuyerLayout";
import { useGetProductQuery } from "../../features/product/productApi";
import AddToCartButton from "../../components/Buyer/AddToCartButton";

export default function ProductDetails() {
  const { productId } = useParams() || {};
  const { isSuccess, data: product } = useGetProductQuery(productId, {
    skip: productId ? false : true,
  });

  const {
    title,
    thumbnail,
    price,
    quantity,
    images,
    short_description,
    long_description,
    category,
  } = product || {};

  isSuccess && console.log(product);

  return (
    <Layout>
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <img src={thumbnail} alt={title} />
          <div className="flex gap-4 mt-8">
            {images?.length > 0 &&
              images.map((image) => (
                <img className="w-24" key={image} src={image} alt="" />
              ))}
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-4 mt-6">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-lg">{short_description}</p>
          <p className="text-lg">{long_description}</p>
          <div className="flex items-center gap-8">
            <p className="text-3xl font-semibold">Price: $ {price}</p>
            <p className="text-xl font-semibold">Quantity: {quantity}</p>
          </div>
          {category?.name && (
            <p className="text-lg font-medium capitalize">Category: {category.name}</p>
          )}
          <div>
            <AddToCartButton size="md" product={product} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
