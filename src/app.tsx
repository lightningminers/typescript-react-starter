import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { hot } from "react-hot-loader";
import { IStoreState } from "./global/types";
import { setGlobalSyncId } from "./global/actions";
import { HomePage } from "./pages/Home";
import { TestPage } from "./pages/Test";
import "./style.less";

interface IAppComponentProps {
  dispatch: Dispatch;
}

class AppComponent extends React.Component<IAppComponentProps, {}> {
  constructor(props: IAppComponentProps) {
    super(props);
  }

  public handleGlobal = () => {
    this.props.dispatch(setGlobalSyncId());
  }

  public render() {
    return (
      <Router>
        <div>
          {/* layout struct(like nav, sidebar...) */}
          <div className="nav-container">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/test">Test Page</NavLink>
          </div>

          {/* register routes */}
          <Route exact path="/" component={HomePage} />
          <Route path="/test" component={TestPage} />

          <button onClick={this.handleGlobal}>
            tirgger global action
          </button>

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

const App = connect(mapStateToProps)(AppComponent);
export default hot(module)(App);
