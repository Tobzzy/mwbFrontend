import React from "react";
import { Route } from "react-router-dom";
import * as Styled from "./App.styled";
import { mdiCoffee, mdiCardsHeart, mdiCodeJson } from "@mdi/js";
import Icon from "@mdi/react";

import { Cart } from "../Cart";
import { Products } from "../Products";

export const App = () => {
  return (
    <>
      <Styled.Global />
      <Styled.Main>
        <h1>Welcome to my Online Shopping Website</h1>
        <Styled.Content>
          <Route exact path="/">
            <Cart />
            <Products />
          </Route>
        </Styled.Content>
        <Styled.Link>
          <Icon path={mdiCodeJson} size={0.6} /> by{" "}
          <a href="https://github.com/Tobzzy" target="blank">
            Toyib Ahmed
          </a>
          , with <Icon path={mdiCardsHeart} size={0.5} /> and{" "}
          <Icon path={mdiCoffee} size={0.5} />
        </Styled.Link>
      </Styled.Main>
    </>
  );
};
