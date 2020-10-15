import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_PRODUCT } from "./AddProduct.gql";
import * as Styled from "./AddProduct.styled";
import { Product } from "../../fragments";
import { Modal } from "../Modal";
import { Button } from "../Button";

export const AddProduct = ({ onClose }) => {
  const { push } = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    update: (cache, { data: { createProduct } }) => {
      cache.modify({
        fields: {
          products(existingProducts = []) {
            const newProduct = cache.writeFragment({
              data: createProduct,
              fragment: Product,
            });
            return [...existingProducts, newProduct];
          },
        },
      });
    },
  });

  /** @todo this form would ideally have validation */

  return (
    <Modal onClose={onClose}>
      <Styled.Main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProduct({
              variables: {
                name,
                description,
                price,
                inStock,
              },
            });
            push("/");
          }}
        >
          <h3>Add new product</h3>
          <div>
            <label>Product Name: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required=""
            ></input>
          </div>
          <div>
            <label>Product Description: </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required=""
            ></input>
          </div>
          <div>
            <label>Product Price: </label>
            <input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required=""
            ></input>
          </div>
          <div>
            <label>Product InStock: </label>
            <input
              value={inStock}
              onChange={(e) => setInStock(Number(e.target.value))}
              required=""
            ></input>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Styled.Main>
    </Modal>
  );
};
