import ReactDOM from "react-dom/client";
import React from "react";
import { JournalApp } from "./JournalApp.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import "@fontsource/roboto/700.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
