import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useUserContext hook must me used inside UserContextProvider");
  }

  return context;
}
