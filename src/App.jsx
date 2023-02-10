import React from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";
import useProductContext from "./hooks/useProductContext";

export default function App() {
  const { products } = useProductContext();
  console.log(products);
  return (
    <div className="overflow-hidden">
      <AddProduct />
      {products.length > 0 ? (
        <Products />
      ) : (
        <h1 className="font-bold text-center my-3 text-2xl">
          No Products Added!
        </h1>
      )}
    </div>
  );
}
