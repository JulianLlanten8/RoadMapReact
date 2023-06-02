import React from "react";
import ReactDOM from "react-dom/client";

// Se crea el componente App
const App = () => {
  return <div>Hello World</div>;
};

// Se renderiza el componente App en el elemento con id root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
