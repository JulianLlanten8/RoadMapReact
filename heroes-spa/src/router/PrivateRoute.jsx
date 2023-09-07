import { useContext } from "react";
import { AuthContext } from "../auth/context";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastpath", lastPath);

  //Memoriza la ultima ruta visitada para cuando se loguee redirigir a esa ruta

  return logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
