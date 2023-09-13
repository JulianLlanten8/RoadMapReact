import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";


import { increment, decrement, incrementByAmount } from "./store/slice/counter";

function App() {
  // useSelector: permite acceder a los estados del store de redux
  const { counter } = useSelector((state) => state.counter);
  // useDispatch: permite acceder a las acciones del store de redux
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* "dispath": dispara una accion que se encuentra en el store */}
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
        <button onClick={() => dispatch(incrementByAmount(4))}> +2 </button>
      </div>
    </>
  );
}

export default App;
