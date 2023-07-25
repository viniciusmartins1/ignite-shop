import { styled } from "../../../styles";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",

  button: {
    padding: "0.75rem",
    textAlign: "center",
    position: "relative",
    background: "$gray800",
    borderRadius: 6,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: 0,
    cursor: "pointer",

    svg: {
      color: "$gray100",
    },

    span: {
      position: "absolute",
      backgroundColor: "$green500",
      borderRadius: "50%",
      padding: "4.7px 9px",
      fontWeight: "bold",
      userSelect: "none",
      fontSize: "$sm",
      border: 4,
      borderColor: "$gray900",
      borderStyle: "solid",

      color: "$gray100",

      top: -14,
      right: -12,
    },

    "&:disabled": {
      svg: {
        color: "$gray300",
      },
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green500",
    },
  },
});
