import React from "react";
import ReactDOM from "react-dom";
import ApplicationRouter from "./routes";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
