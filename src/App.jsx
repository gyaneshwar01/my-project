import React, { useEffect, useState } from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [product, ...prevProducts]);
  };

  return (
    <div className="overflow-hidden">
      <AddProduct addProduct={addProduct} products={products} />
      {products.length > 0 && <Products products={products} />}
    </div>
  );
}
