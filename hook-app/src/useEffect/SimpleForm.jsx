import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setform] = useState({
    username: "fulanito",
    email: "fulanito@dominio.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    setform({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("hey");
  }, [email]);

  return (
    <>
      <h1>formulario simple</h1>
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

      {username === "fulanito" && <Message />}
    </>
  );
};
