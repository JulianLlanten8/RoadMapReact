import { useReducer } from "react";
import { AuthContext } from "./Auth";
import { AuthReducer } from "./AuthReducer";

import { types } from "../types/types";

import propTypes from "prop-types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};
export const AuthProvider = ({ children }) => {
  const initialState = { logged: false };

  /* 
    use reducer recibe tres argumentos:
    1. El reducer que se va a utilizar
    2. El estado inicial
    3. Una función que se ejecuta al inicio para obtener el estado inicial
  */

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = () => {
    const user = {
      id: 123,
      name: "Julian",
    };
    const action = {
      type: types.login,
      payload: {
        id: 123,
        user: user,
      },
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
