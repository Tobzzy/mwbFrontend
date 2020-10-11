import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle(() => ({
  body: {
    fontFamily: "sans-serif",
  },
}));

export const Main = styled.main(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Content = styled.div(() => ({
  maxWidth: "600px",
  width: "100%",
}));

export const Link = styled.div(() => ({
  color: "palevioletred",
  fontWeight: "bold",
  textDecoration: "none",
  marginTop: "2rem",
}));
