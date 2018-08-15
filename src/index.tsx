import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import { HomePage } from "./pages/Home";
import * as globalActions from "./store/actions";
import { configureStore } from "./store/configureStore";

import "./style.less";

const history = createHashHistory();
const store = configureStore();

globalActions.setGlobalSyncId(store.dispatch);

class AppRouter extends React.Component {
  public render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route exact={true} path="/" component={HomePage}   />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById("app"),
);
