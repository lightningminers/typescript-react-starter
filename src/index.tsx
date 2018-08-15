import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import * as globalActions from "./global/actions";
import { configureStore } from "./global/configureStore";
import { App } from "./app";
import "./style.less";

const history = createHashHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app"),
);
