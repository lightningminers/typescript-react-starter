import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom'

export interface IHomePageAction {
  type: string;
  payload: any;
}

export interface IHomePageStoreState {
  syncId: string;
  asyncId: string;
}

export interface IHomePageActionsProps {
  dataSync: () => void;
  dataAsync: (parameter: string) => (dispatch: Dispatch) => void;
}

export interface IHomePageState {
  name: string;
}

export interface IHomePageProps extends RouteComponentProps<any>, IHomePageActionsProps {
  homePage: IHomePageStoreState;
}