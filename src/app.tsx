import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { createHashHistory } from "history";
import { IStoreState } from "./global/types";
import * as globalActions from "./global/actions";
import { HomePage } from "./pages/Home";
import TestPage from "./pages/Test";

interface IAppComponentProps {
  dispatch: Dispatch;
}

class AppComponent extends React.Component<IAppComponentProps> {
  constructor(props: IAppComponentProps) {
    super(props);
    globalActions.setGlobalSyncId(this.props.dispatch);
  }

  public render() {
    return (
      <Router >
        <div>
          <div>
            <NavLink to="/" >Home</NavLink>
            <br />
            <NavLink to="/test">Test</NavLink>
          </div>

          <Route exact={true} path="/" component={HomePage} />
          <Route path="/test" component={TestPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { global } = state;
  return {
    global,
  };
};

export const App = connect(mapStateToProps)(AppComponent);
