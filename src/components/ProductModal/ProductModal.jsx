import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCT_BY_ID } from "./ProductModal.gql";
import * as Styled from "./ProductModal.styled";
import { Modal } from "../Modal";

export const ProductModal = ({ onClose, productId }) => {
  const {
    data: { product: { description, name, price } = {} } = {},
  } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { _id: productId },
  });

  return (
    <Modal onClose={onClose}>
      <Styled.Columns>
        <Styled.Column flex={2}>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Description>{description}</Styled.Description>
        </Styled.Column>
        <Styled.Column>
          <Styled.Price>£{Number(price).toFixed(2)}</Styled.Price>
          <Styled.Button>Add to cart</Styled.Button>
        </Styled.Column>
      </Styled.Columns>
    </Modal>
  );
};
