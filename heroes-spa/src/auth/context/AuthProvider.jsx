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
    estos solo deben de resolverse una usando el state y el dispatch
  */

  const [authState, dispatch] = useReducer(AuthReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: 123,
      name: name,
    };
    const action = {
      type: types.login,
      payload: user
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);

    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{ ...authState, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
