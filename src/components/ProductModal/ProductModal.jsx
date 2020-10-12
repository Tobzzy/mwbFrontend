import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
  GET_PRODUCT_BY_ID,
  CREATE_ORDER_ITEM,
  GET_ORDER_ITEMS_BY_PRODUCT,
  UPDATE_ORDER_ITEM,
} from "./ProductModal.gql";
import * as Styled from "./ProductModal.styled";
import { Modal } from "../Modal";

export const ProductModal = ({ onClose, productId }) => {
  const {
    data: { product: { description, name, price, inStock } = {} } = {},
  } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { _id: productId },
  });

  const {
    data: { orderItems: [{ _id: orderItemId, quantity } = {}] = [] } = {},
  } = useQuery(GET_ORDER_ITEMS_BY_PRODUCT, { variables: { productId } });

  const [createOrderItem] = useMutation(CREATE_ORDER_ITEM);

  const [updateOrderItem] = useMutation(UPDATE_ORDER_ITEM, {
    refetchQueries: GET_ORDER_ITEMS_BY_PRODUCT,
  });

  const incrementOrderItem = () => {
    if (orderItemId) {
      updateOrderItem({
        variables: { _id: orderItemId, quantity: quantity + 1 },
      });
    } else {
      createOrderItem({
        variables: { productId, quantity: 1 },
      });
    }
  };

  const decrementOrderItem = () => {
    if (quantity > 0) {
      updateOrderItem({
        variables: { _id: orderItemId, quantity: quantity - 1 },
      });
    } else if (quantity === 0) {
      // deleteOrderItem
    }
  };

  return (
    <Modal onClose={onClose}>
      <Styled.Columns>
        <Styled.Column flex={2}>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Description>{description}</Styled.Description>
        </Styled.Column>
        <Styled.Column>
          <Styled.Price>€{Number(price).toFixed(2)}</Styled.Price>
          <Styled.Price>Availability: {inStock - quantity}</Styled.Price>
          <Styled.ButtonAdd
            disabled={inStock <= quantity}
            onClick={incrementOrderItem}
          >
            Add to cart
          </Styled.ButtonAdd>
          <Styled.ButtonRemove onClick={decrementOrderItem}>
            remove from cart
          </Styled.ButtonRemove>
          <p>this item in cart: {quantity}</p>
          <Styled.ButtonClose onClick={onClose}>close</Styled.ButtonClose>
        </Styled.Column>
      </Styled.Columns>
    </Modal>
  );
};
