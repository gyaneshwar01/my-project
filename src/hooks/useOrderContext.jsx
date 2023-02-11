import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export default function useOrderContext() {
  const context = useContext(OrderContext);

  if (!context) {
    throw Error("useOrderContext must be used inside OrderContextProvider");
  }

  return context;
}
