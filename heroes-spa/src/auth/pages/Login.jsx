import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onlogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Julian llanten");

    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-light">login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onlogin}>
        Login
      </button>
    </div>
  );
};
