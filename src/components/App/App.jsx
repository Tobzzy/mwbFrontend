import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./App.styled";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Products } from "../Products";
import { OrderItemToast } from "../OrderItemToast";
import { ButtonAddProduct } from "../ButtonAddProduct";

export const App = () => {
  return (
    <>
      <Styled.Global />
      <Styled.App>
        <Header />
        <Styled.Main>
          <Styled.Content>
            <Route exact path="/">
              <Products />
              <OrderItemToast />
            </Route>
            <ButtonAddProduct />
          </Styled.Content>
        </Styled.Main>
        <Footer />
      </Styled.App>
    </>
  );
};
