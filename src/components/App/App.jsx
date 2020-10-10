import React from "react";
import { Link, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Cart } from "../Cart";
import { Products } from "../Products";

const GlobalStyle = createGlobalStyle(() => ({
  body: {
    fontFamily: "sans-serif",
  },
}));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route exact path="/">
        <Products />
      </Route>
    </>
  );
};
