import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const body = document.getElementById("body");
const app = document.getElementById("root");
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
