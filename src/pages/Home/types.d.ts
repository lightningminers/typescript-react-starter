import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { IGlobalStoreState } from "@/global/types";

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
  global: IGlobalStoreState;
}
