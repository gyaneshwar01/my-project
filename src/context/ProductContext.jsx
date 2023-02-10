import { createContext, useEffect, useReducer } from "react";

export const ProductContext = createContext();

export const ACTIONS = {
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return action.payload.products;
    case ACTIONS.ADD_PRODUCT:
      const updatedProducts = [action.payload.product, ...state];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    case ACTIONS.DELETE_PRODUCT:
      const newProducts = state.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("products", JSON.stringify(newProducts));
      return newProducts;
    default:
      return state;
  }
};

export default function ProductContextProvider({ children }) {
  const [products, dispatch] = useReducer(productReducer, []);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      dispatch({
        type: ACTIONS.SET_PRODUCTS,
        payload: { products: JSON.parse(localStorage.getItem("products")) },
      });
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
