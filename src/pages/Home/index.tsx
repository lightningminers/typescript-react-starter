import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./flow/actions";
import * as TYPES from "./types";
import { IStoreState } from "../../global/types";
import { Header } from "./components/Header";
import "./style.less";

const localImage = require("@/assets/welearnmore.png");
const onLineImage: string = "http://images.w3crange.com/welearnmore.png";

class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
  constructor(props: TYPES.IHomePageProps) {
    super(props);
    this.state = {
      name: "",
    };
  }

  public actionDataSync = () => {
    this.props.dataSync();
  }

  public actionDataAsync = () => {
    this.props.dataAsync("icepy");
  }

  public setName = () => {
    this.setState({
      name: "icepy",
    });
  }

  public render() {
    const { homePage, global } = this.props;
    const { syncId, asyncId } = homePage;
    const { globalSyncId } = global;
    const { name } = this.state;
    return (
      <div className="container">
        <Header localImageSrc={localImage} onLineImageSrc={onLineImage} />
        <div className="buttons">
          <button onClick={this.actionDataSync}> dataSync action </button>
          <button onClick={this.actionDataAsync}> dataAsync action </button>
          <button onClick={this.setName}> setState name </button>
        </div>
        <div className="contents">
          <p>
            syncId: {syncId}
          </p>
          <p>
            asyncId: {asyncId}
          </p>
          <p>
            setState name: {name}
          </p>
          <p>
            global Sync Id: {globalSyncId}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { homePage, global } = state;
  return {
    homePage,
    global,
  };
};

export const HomePage = connect(mapStateToProps, actions)(HomeComponent);
