import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorld } from "./HelloWorld";
import { FirstApp, SecondApp } from "./FirstApp";
// import { CounterApp } from "./CounterApp";
import "./styles.css";

// Se renderiza el componente App en el elemento con id root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    <FirstApp />
    <SecondApp title="Hola, soy Vegueta" subTitle="Sub titulo" />
    {/* <CounterApp value={0} /> */}
  </React.StrictMode>
);
