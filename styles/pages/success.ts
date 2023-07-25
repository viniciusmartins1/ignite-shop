import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: "3rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 590,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },

  div: {
    display: "flex",
    justifyContent: "center",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 145,
  height: 145,
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "0.45rem",
  marginTop: "4rem",

  variants: {
    imagePosition: {
      first: { marginLeft: 0 },
      other: { marginLeft: -50 },
    },
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "10px 30px 30px $gray800",

  img: {
    objectFit: "cover",
  },
});
