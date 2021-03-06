import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import Background from "./components/background";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>
);
