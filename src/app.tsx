import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { IStoreState } from "./global/types";
import * as globalActions from "./global/actions";
import { HomePage } from "./pages/Home";
import { TestPage } from "./pages/Test";
import "./style.less";

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
      <Router>
        <div>
          <div className="nav-container">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/test">Test Page</NavLink>
          </div>

          {/* register routes */}
          <Route exact path="/" component={HomePage} />
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
