import { useState } from "react";
import PropTypes from "prop-types";

export function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleDecrease = () =>
    counter > 0 ? setCounter(counter - 1) : setCounter(0);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset} aria-label="btn-reset">Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
