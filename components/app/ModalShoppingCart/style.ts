import { styled } from "../../../styles";

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

  svg: {
    color: "$gray300",
    // marginTop: -20,
    cursor: "pointer",
    // width: "100%",
    position: "absolute",
    right: "2rem",
    top: "2rem",
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
      display: "flex",

      img: {
        objectFit: "cover",
        alignSelf: "center",
        justifySelf: "center",
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

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover  ": {
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
