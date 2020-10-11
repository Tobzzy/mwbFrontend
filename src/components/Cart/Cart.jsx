import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ORDER_ITEMS } from "./Cart.gql";

import * as Styled from "./Cart.styled";

export const Cart = () => {
  const { data: { orderItems = [] } = {} } = useQuery(GET_ORDER_ITEMS);
  console.log("orderItems:" + orderItems);
  return (
    <div>
      <Styled.Cart>Just for Cart - To be continued</Styled.Cart>
      {orderItems.map(({ quantity, product: { name, description, price } }) => (
        <>
          {quantity}
          {name}
          {description}
          {price}
        </>
      ))}
    </div>
  );
};
