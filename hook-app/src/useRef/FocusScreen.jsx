import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        name="nombre"
        id="nombre"
        autoComplete="given-name"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-outline-primary mt-5" onClick={onClick}>
        Focus
      </button>
    </>
  );
};
