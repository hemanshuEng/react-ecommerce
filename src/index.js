import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context";
import * as serviceWorker from "./serviceWorker";
document.body.style.backgroundColor = "#EEEDE7";

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
