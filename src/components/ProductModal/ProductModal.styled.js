import styled from "styled-components";

export const Columns = styled.div(() => ({
  display: "flex",
  flex: 1,
}));

export const Column = styled.div(({ flex = 1 }) => ({
  display: "flex",
  flex: flex,
  flexDirection: "column",
}));

export const Name = styled.span(() => ({
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: "10px",
}));

export const Description = styled.span(() => ({
  margin: "10px",
}));

export const Price = styled.span(() => ({
  margin: "10px",
}));

export const Button = styled.button(() => ({
  margin: "5px",
}));

export const ButtonAdd = styled.button(() => ({
  margin: "5px",
  backgroundColor: "#b8eeb6",
}));

export const ButtonRemove = styled.button(() => ({
  margin: "5px",
  backgroundColor: "#dce186",
}));

export const ButtonClose = styled.button(() => ({
  margin: "5px",
  backgroundColor: "#FF7F7F",
  width: "60px",
  alignSelf: "center",
}));
