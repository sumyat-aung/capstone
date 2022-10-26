import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { ContextProvider } from "./context/Context";
import "./style.css";

let root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
