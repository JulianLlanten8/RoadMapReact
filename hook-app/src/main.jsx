import React from "react";
import ReactDOM from "react-dom/client";
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
import { Padre} from "./tarea-memo/Padre";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
);