import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "./Product.gql";

export const Product = () => {
  const { data: { products = [] } = {} } = useQuery(GET_PRODUCTS);
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <h3>{product.description}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
