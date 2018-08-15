import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from './flow/actions';
import * as TYPES from './flow/types';
import { IStoreState } from '../../store/configureStore';
import './style.less';

class HomeComponent extends React.Component<TYPES.IHomePageProps, TYPES.IHomePageState> {
  constructor(props: TYPES.IHomePageProps){
    super(props);
    this.state = {
      name: ''
    };
  }

  actionDataSync = () => {
    this.props.dataSync();
  }

  actionDataAsync = () => {
    this.props.dataAsync('icepy');
  }

  setName = () => {
    this.setState({
      name: 'icepy'
    });
  }

  logReactRouterObj = () => {
    console.log(this.props.history);
  }

  render() {
    const { homePage } = this.props;
    const { syncId, asyncId } = homePage;
    const { name } = this.state;
    return (
      <div className="container">
        <div className="buttons">
          <button onClick={ this.actionDataSync }> dataSync action </button>
          <button onClick={ this.actionDataAsync }> dataAsync action </button>
          <button onClick={ this.setName }> setState name </button>
          <button onClick={ this.logReactRouterObj }> react-router object </button>
        </div>
        <div className="contents">
          <p>
            syncId: { syncId }
          </p>
          <p>
            asyncId: { asyncId }
          </p>
          <p>
            setState name: { name }
          </p>
          <p>
            react-router object: open Chrome Dev Tool console.log;
          </p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state: IStoreState ) => {
  const homePage: TYPES.IHomePageStoreState = state.homePage;
  return {
    homePage,
  }
}

export const HomePage = connect(mapStateToProps, actions)(HomeComponent)