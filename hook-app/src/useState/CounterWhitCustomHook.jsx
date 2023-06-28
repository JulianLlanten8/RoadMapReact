import { useCounter } from "../hooks/useCounter";
export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <div>Counter whith hook: {counter}</div>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
    </>
  );
};
