import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { OrderItem } from "../../fragments";

import {
  GET_PRODUCT_BY_ID,
  CREATE_ORDER_ITEM,
  GET_ORDER_ITEMS_BY_PRODUCT,
  UPDATE_ORDER_ITEM,
  DELETE_ORDER_ITEM,
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
    data: { orderItems: [orderItem = {}] = [] } = {},
  } = useQuery(GET_ORDER_ITEMS_BY_PRODUCT, { variables: { productId } });

  const { _id: orderItemId, quantity } = orderItem;

  const [createOrderItem] = useMutation(CREATE_ORDER_ITEM, {
    update: (cache, { data: { createOrderItem } }) => {
      cache.modify({
        fields: {
          orderItems(existingOrderItemRefs = []) {
            const newOrderItemRef = cache.writeFragment({
              data: createOrderItem,
              fragment: OrderItem,
              fragmentName: "OrderItem",
            });
            return [...existingOrderItemRefs, newOrderItemRef];
          },
        },
      });
    },
  });

  const [updateOrderItem] = useMutation(UPDATE_ORDER_ITEM);

  const [deleteOrderItem] = useMutation(DELETE_ORDER_ITEM, {
    variables: { _id: orderItemId },
    update: (cache) => {
      cache.modify({
        fields: {
          orderItems: (existingOrderItems = []) => {
            const id = cache.identify(orderItem);
            return existingOrderItems.filter(({ __ref }) => __ref !== id);
          },
        },
      });
    },
  });

  useEffect(() => {});
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
    if (quantity > 1) {
      updateOrderItem({
        variables: { _id: orderItemId, quantity: quantity - 1 },
      });
    } else if (quantity === 1) {
      deleteOrderItem();
    }
  };

  const availability = () => {
    if (quantity != null) {
      return inStock - quantity;
    } else {
      return inStock;
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
          <Styled.Price>Availability: {availability()}</Styled.Price>
          <Styled.ButtonAdd
            disabled={inStock <= quantity}
            onClick={incrementOrderItem}
          >
            Add to cart
          </Styled.ButtonAdd>
          <Styled.ButtonRemove
            disabled={!quantity}
            onClick={decrementOrderItem}
          >
            remove from cart
          </Styled.ButtonRemove>
          <p>this item in cart: {quantity}</p>
          <Styled.ButtonClose onClick={onClose}>close</Styled.ButtonClose>
        </Styled.Column>
      </Styled.Columns>
    </Modal>
  );
};
