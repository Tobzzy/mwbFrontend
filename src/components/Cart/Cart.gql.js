import { gql } from "@apollo/client";

export const GET_ORDER_ITEMS = gql`
  query {
    orderItems {
      quantity
      product {
        _id
        name
        description
        price
        inStock
      }
    }
  }
`;
