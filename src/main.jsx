import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "@headlessui/react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import "./custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
