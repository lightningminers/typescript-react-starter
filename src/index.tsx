import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./global/configureStore";
import { App } from "./app";
import "./style.less";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);
