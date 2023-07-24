import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

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
  },
});

export const ModalChart = styled("div", {
  height: "auto",
  width: 480,
  background: "$gray800",
  position: "absolute",
  padding: "3rem",
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  transition: "all 0.4s ease",

  variants: {
    modalIsOpen: {
      true: { right: 0 },
      false: { right: -480 },
    },
  },

  h3: {
    marginTop: "1.5rem",
    lineHeight: "2rem",
    color: "$gray100",
    fontSize: "$lg",
  },
});

export const ProductItems = styled("ul", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  flex: 1,

  li: {
    listStyle: "none",
    display: "flex",
    gap: "1.25rem",

    div: {
      background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
      width: 120,
      height: 95,
      borderRadius: 8,

      img: {
        objectFit: "cover",
      },
    },

    "div + div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      // fontSize: 18,
      background: "transparent",
      width: "100%",
      height: 95,

      p: {
        color: "$gray300",
        fontSize: "1.125rem",
        lineHeight: "1.8rem",
      },

      strong: {
        fontWeight: "700",
        color: "$gray100",
        fontSize: "1.125rem",
        lineHeight: "1.8rem",
      },

      button: {
        fontSize: "1rem",
        color: "$green500",
        lineHeight: "1.6rem",
        fontWeight: "bold",
        marginTop: 8,
        cursor: "pointer",
        width: "23.5%",
        textAlign: "left",

        background: "none",
        border: 0,
      },
    },
  },
});

export const CheckoutButton = styled("button", {
  padding: "1.25rem 2rem",
  border: 0,
  backgroundColor: "$green500",
  color: "$white",
  fontWeight: "bold",
  fontSize: "1.125rem",
  borderRadius: 8,
  width: "100%",
  cursor: "pointer",
  marginTop: "3.4rem",

  "&:hover": {
    backgroundColor: "$green300",
  },
});

export const PaymmentContainer = styled("div", {
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  gap: 7,

  div: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const QuantityDetails = styled("div", {
  color: "$gray100",
  lineHeight: "160%",

  span: {
    fontSize: "1rem",
  },

  p: {
    fontSize: "1.125",
  },
});

export const TotalDetails = styled("div", {
  color: "$gray100",
  fontWeight: 700,

  span: {
    fontSize: "1.125",
    lineHeight: "160%",
  },

  p: {
    fontSize: "$lg",
    lineHeight: "140%",
  },
});
