import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ORDER_ITEMS } from "./Header.gql";

import * as Styled from "./Header.styled";

export const Header = () => {
  const { data: { orderItems = [] } = {} } = useQuery(GET_ORDER_ITEMS);

  const quantity = orderItems.length;

  return (
    <div>
      <Styled.Main>Welcome to my Online Shopping Website</Styled.Main>
      <Styled.Cart>Test Application:</Styled.Cart>
      <Styled.Cart>Total in cart: {quantity}</Styled.Cart>
    </div>
  );
};
