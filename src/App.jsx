import React from "react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import useUserContext from "./hooks/useUserContext";
import Orders from "./pages/Orders";

export default function App() {
  const { user } = useUserContext();
  console.log(user);

  return (
    <div>
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
        <Route
          path="/orders"
          element={
            user && user.isAdmin ? <Orders /> : <Navigate to={"/products"} />
          }
        />
      </Routes>
    </div>
  );
}
