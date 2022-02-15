import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MyContextProvider } from "./Context/MyContext";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
