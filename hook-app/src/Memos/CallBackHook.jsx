import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    console.log("setCounter(counter + 1)");
    setCounter((value)=> value + 1);
  }, []);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */

  return (
    <>
      <h1>useCallBack Hook : {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
