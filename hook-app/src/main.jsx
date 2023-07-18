import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { HooksApp } from "./HooksApp";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { FormWhitCustomHook } from "./useEffect/FormWhitCustomHook";
// import { CounterWithCustomHook } from "./useState/CounterWhitCustomHook";
// import { MultipleCustomHoook } from "./examples/MultipleCustomHoook";
// import { FocusScreen } from "./useRef/FocusScreen";
// import { Layout } from "./useLayoutEffect/Layout";
// import { Memorize } from "./Memos/Memorize";
// import { MemoHook } from "./Memos/MemoHook";
// import { CallBackHook } from "./Memos/CallBackHook";
// import { Padre } from "./tarea-memo/Padre";
// import "./useReducer/intro-reducer";
// import { TodoApp } from "./useReducer/TodoApp";
import { MainApp } from "./useContex/MainApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
