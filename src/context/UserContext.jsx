import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

export const ACTIONS = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      const newUser = action.payload.user;
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    case ACTIONS.REMOVE_USER:
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch({
        type: ACTIONS.SET_USER,
        payload: { user: JSON.parse(localStorage.getItem("user")) },
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
