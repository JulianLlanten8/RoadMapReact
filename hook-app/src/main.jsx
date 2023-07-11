import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { FormWhitCustomHook } from "./useEffect/FormWhitCustomHook";
import { MultipleCustomHoook } from "./examples/MultipleCustomHoook";
// import { CounterWithCustomHook } from "./useState/CounterWhitCustomHook";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultipleCustomHoook />
  </React.StrictMode>
);
