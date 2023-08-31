import { useReducer } from "react";
import { AuthContext } from "./Auth";
import { AuthReducer } from "./AuthReducer";

import { types } from "../types/types";

import propTypes from "prop-types";
export const AuthProvider = ({ children }) => {
  const initialState = { logged: false };

  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  const login = () => {
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name: "Julian",
      },
    };
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
