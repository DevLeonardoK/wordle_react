import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const body = document.getElementById("body");
body.style.margin = 0;
body.style.boxSizing = "border-box";
body.style.padding = 0;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.textTransform = "toUpperCase;";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
