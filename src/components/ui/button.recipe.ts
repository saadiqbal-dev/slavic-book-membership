import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    padding: "12px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    borderRadius: "48px",
    background: "#FED711",
    color: "black",
    border: "2px solid #A46804",
    boxShadow: "0px 1px 27.1px 3px rgba(164, 104, 4, 0.15)",
    cursor: "pointer",

    // Font
    // fontFamily: "Filson Pro",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "150%",
  },
  variants: {
    visual: {
      // solid: { bg: "red.200", color: "white" },
      // outline: { borderWidth: "1px", borderColor: "red.200" },
      ghost: {
        bg: "transparent",
        color: "black",
        border: "none",
        boxShadow: "none",
      },
      solid: {
        bg: "#FED711",
        border: "2px dashed #A46804",
        fontSize: "18px",
      },
      dashed: {
        bg: "transparent",
        border: "2px dashed  #A46804",
        color: "#FED711",
        fontSize: "18px",
      },
    },
    size: {
      // sm: { padding: "4", fontSize: "12px" },
      // lg: { padding: "8", fontSize: "24px" },
    },
  },
});
