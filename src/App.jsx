import React from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import useUserContext from "./hooks/useUserContext";

export default function App() {
  const { user } = useUserContext();
  console.log(user);

  return (
    <div className="overflow-hidden">
      {user && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to={"/products"} /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path={"/login"}
          element={!user ? <Login /> : <Navigate to={"/products"} />}
        />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/product/add"
          element={user ? <AddProduct /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}
