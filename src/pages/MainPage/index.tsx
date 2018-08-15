import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import * as actions from './flow/actions';
import { ImainPageStoreState } from './flow/mainPageReducers';
import { IStoreState } from '../../store/configureStore';
import './style.less';

interface ImainPageActionsProps {
  dataSync: () => void;
  dataAsync: (parameter: string) => (dispatch: Dispatch) => void;
}

interface ImainPageState {
  name: string;
}

interface ImainPageProps extends RouteComponentProps<any>, ImainPageActionsProps {
  mainPage: ImainPageStoreState;
}


class MainComponent extends React.Component<ImainPageProps, ImainPageState> {
  constructor(props: ImainPageProps){
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
    const { mainPage } = this.props;
    const { syncId, asyncId } = mainPage;
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
  const mainPage: ImainPageStoreState = state.mainPage;
  return {
    mainPage,
  }
}

export const MainPage = connect(mapStateToProps, actions)(MainComponent)