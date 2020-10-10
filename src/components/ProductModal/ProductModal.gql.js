import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
  query($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      description
      price
    }
  }
`;
