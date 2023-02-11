import { createContext, useReducer, useEffect } from "react";

export const OrderContext = createContext();

export const ACTIONS = {
  ADD_ORDER: "ADD_ORDER",
  SET_ORDERS: "SET_ORDERS",
  REMOVE_ORDER: "REMOVE_ORDER",
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ORDER:
      const newOrders = [action.payload.order, ...state];
      localStorage.setItem("orders", JSON.stringify(newOrders));
      return newOrders;
    case ACTIONS.SET_ORDERS:
      return action.payload.orders;
    case ACTIONS.REMOVE_ORDER:
      const updatedOrders = state.filter(
        (order) => order.id !== action.payload.id
      );
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    default:
      return state;
  }
};

const OrderContextProvider = ({ children }) => {
  const [orders, dispatch] = useReducer(orderReducer, []);
  useEffect(() => {
    if (localStorage.getItem("orders")) {
      dispatch({
        type: ACTIONS.SET_ORDERS,
        payload: { orders: JSON.parse(localStorage.getItem("orders")) },
      });
    }
  }, []);

  return (
    <OrderContext.Provider value={{ orders, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
