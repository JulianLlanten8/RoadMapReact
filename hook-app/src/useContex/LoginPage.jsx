import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 1234,
            name: "Fernando",
            email: "fernando@google.com",
          })
        }
      >
        Login
      </button>
    </>
  );
};
