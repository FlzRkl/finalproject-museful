import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//STYLING
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/_index.scss";
import "./style/fontawesome";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
