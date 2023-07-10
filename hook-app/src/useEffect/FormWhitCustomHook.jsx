import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWhitCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  /* useEffect(() => {
    console.log("esta cambiando el email");
  }, [email]); */

  return (
    <>
      <h1>formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="example@domain.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
