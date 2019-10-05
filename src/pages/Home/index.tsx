import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IPageRoute } from "../shared";
import { IGlobal } from "../../store/global";
import { IStoreState } from "../../store/shared";
import * as actions from "./flow";
import Logo from "../../assets/logo.svg";

interface IProps extends IPageRoute<any>, actions.IActions, actions.IHome {
  global: IGlobal;
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
      <>
        <button onClick={this.onClick}>同步更新Count</button>
        <button onClick={this.onClickAsync}>异步更新Count</button>
        <div style={{ paddingLeft: "10px"}}>{this.props.count}</div>
        <img src={Logo} alt="" />
      </>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { global, home } = state;
  return {
    global,
    ...home,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateCount: (count: number) => {
      dispatch(actions.updateCount(count));
    },
    asyncUpdateCount: (count: number) => {
      actions.asyncUpdateCount(count, dispatch);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
