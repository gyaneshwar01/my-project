import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductContextProvider from "./context/ProductContext";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import OrderContextProvider from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ProductContextProvider>
      <OrderContextProvider>
        <Router>
          <App />
        </Router>
      </OrderContextProvider>
    </ProductContextProvider>
  </UserContextProvider>
);
