import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [counter, setCount] = useState(initialValue);

  const increment = () => setCount(counter + 1);
  const decrement = () => {
    if (counter <= 1) return;
    setCount(counter - 1);
  };

  return {
    //Properties
    counter,
    //Methods
    increment,
    decrement,
  };
};
