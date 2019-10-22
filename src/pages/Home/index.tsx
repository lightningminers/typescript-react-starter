import React from "react";
import { connect } from "react-redux";
import { IPageRoute } from "../shared";
import { IGlobal } from "../../store/global";
import { IStoreState } from "../../store/shared";
import {
  IHomePage,
  UpdateCount,
  AsyncUpdateCount,
  updateCount,
  asyncUpdateCount
} from "./flow";
import logoSvg from "../../assets/logo.svg";

interface IProps extends IPageRoute<any>, IHomePage {
  global: IGlobal;
  updateCount: UpdateCount;
  asyncUpdateCount: AsyncUpdateCount;
}

class Home extends React.Component<IProps>{
  onClick = () => {
    this.props.updateCount(this.props.count)
  }

  onClickAsync = () => {
    this.props.asyncUpdateCount(this.props.count);
  }
  render(){
    return(
      <div>
        <button onClick={this.onClick}>同步更新Count</button>
        <button onClick={this.onClickAsync}>异步更新Count</button>
        <div style={{ paddingLeft: "10px"}}>{this.props.count}</div>
        <img src={logoSvg} alt="" width="100vw"/>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  global: state.global,
  ...state.homePage
});

const mapDispatchToProps = {
  updateCount,
  asyncUpdateCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
