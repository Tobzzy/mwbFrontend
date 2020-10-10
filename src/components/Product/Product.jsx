import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCT_BY_ID } from "./Product.gql";
import { ProductModal } from "../ProductModal";

export const Product = ({ id }) => {
  const [productModalVisible, setProductModalVisible] = useState();

  const { data: { product: { name, price } = {} } = {} } = useQuery(
    GET_PRODUCT_BY_ID,
    {
      variables: { _id: id },
    }
  );

  return (
    <>
      {productModalVisible && (
        <ProductModal
          onClose={() => setProductModalVisible(false)}
          productId={id}
          visible={productModalVisible}
        />
      )}
      <div>
        <span>{name}</span>
        <button onClick={() => setProductModalVisible(true)}>
          add to cart
        </button>
      </div>
    </>
  );
};
