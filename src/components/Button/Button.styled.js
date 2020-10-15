import styled from "styled-components";

export const Button = styled.button({
  backgroundColor: "#cce8d3",
  lineHeight: "2rem",
  borderRadius: "false",
  outline: "none",
  border: "none",
  height: "30px",
  cursor: "pointer",
  "@media (hover: hover) and (pointer: fine)": {
    ":hover": {
      backgroundColor: "hsl(84, 74%, 84%)",
    },
  },
});
