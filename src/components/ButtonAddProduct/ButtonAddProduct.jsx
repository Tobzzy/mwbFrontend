import React, { useState } from "react";
import * as Styled from "./ButtonAddProduct.styled";

import { AddProduct } from "../AddProduct";
import { Button } from "../Button";

export const ButtonAddProduct = () => {
  const [addProductVisible, setAddProductVisible] = useState();
  return (
    <Styled.Main>
      {addProductVisible && (
        <AddProduct
          onClose={() => setAddProductVisible(false)}
          visible={addProductVisible}
        />
      )}
      <Button onClick={() => setAddProductVisible(true)}>Add Product</Button>
    </Styled.Main>
  );
};
