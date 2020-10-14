import React, { useEffect } from "react";
import difference from "lodash.difference";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSubscription, useQuery } from "@apollo/client";

import { ORDERITEMS_SUBSCRIPTION, GET_ORDER_ITEMS } from "./OrderItemToast.gql";

export const OrderItemToast = () => {
  const {
    data: {
      orderItems: currentOrderItems = [],
      orderItems: [{ quantity } = {}] = [],
    } = {},
  } = useQuery(GET_ORDER_ITEMS);

  const { data: { orderItems: newOrderItems = [] } = {} } = useSubscription(
    ORDERITEMS_SUBSCRIPTION
  );

  useEffect(() => {
    const [updatedOrderItem] = difference(newOrderItems, currentOrderItems);
    if (currentOrderItems.length && newOrderItems.length && updatedOrderItem) {
      toast(updatedOrderItem.product.name);
      console.log("name", updatedOrderItem.product.name);
      console.log("quantity", quantity);
    }
  }, [newOrderItems]);

  return <ToastContainer />;
};
