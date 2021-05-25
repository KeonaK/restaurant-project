import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//provides the application with our state from the store
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  //pass in the store prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
