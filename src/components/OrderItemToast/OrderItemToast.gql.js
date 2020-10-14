import { gql } from "@apollo/client";

import { OrderItem } from "../../fragments";

export const ORDERITEMS_SUBSCRIPTION = gql`
  subscription SubcriptionGetOrderItems {
    orderItems {
      ...OrderItem
    }
  }
  ${OrderItem}
`;

export const GET_ORDER_ITEMS = gql`
  query {
    orderItems {
      ...OrderItem
    }
  }
  ${OrderItem}
`;
