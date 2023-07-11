// import { memo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
