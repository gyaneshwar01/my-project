import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error(
      "useProductContext hook must be used inside ProductContextProvider"
    );
  }

  return context;
}
