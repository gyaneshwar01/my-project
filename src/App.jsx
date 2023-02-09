import React, { useEffect, useState } from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  const addProduct = (product) => {
    const newProducts = [product, ...products];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <div className="overflow-hidden">
      <AddProduct addProduct={addProduct} products={products} />
      {products.length > 0 && (
        <Products products={products} deleteProduct={deleteProduct} />
      )}
    </div>
  );
}
