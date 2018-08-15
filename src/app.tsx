import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { IStoreState } from "./global/types";
import * as globalActions from "./global/actions";
import { Dispatch } from "redux";

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
      <div>
        <Route exact={true} path="/" component={HomePage} />
      </div>
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
