import { useEffect, useState } from "react";
import BuyerLayout from "../../components/Layout/BuyerLayout";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useGetCartsQuery } from "../../features/cart/cartApi";
import Loader from "../../components/Loader/Loader";
import { useGetOrdersQuery } from "../../features/order/orderApi";

export default function Order() {

  const {
    isSuccess: isSuccessFetchOrders,
    data: orders,
    isLoading: isLoadingFetchOrders,
  } = useGetOrdersQuery();

  console.log(orders);

  if (isLoadingFetchOrders) {
    return <Loader />;
  }
  return (
    <BuyerLayout>
      <div className="">
        
      </div>
    </BuyerLayout>
  );
}
