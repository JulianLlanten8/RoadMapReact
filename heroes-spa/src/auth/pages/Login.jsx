import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
export const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onlogin = () => {
    login("Julian llanten");
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onlogin}>
        Login
      </button>
    </div>
  );
};
