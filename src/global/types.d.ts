import { IHomePageStoreState } from "../pages/Home/types";

export interface IAction {
  type: string;
  payload: any;
}

export interface IGlobalStoreState {
  globalSyncId: string;
  globalAsyncId: string;
}

export interface IStoreState {
  homePage: IHomePageStoreState;
  global: IGlobalStoreState;
}
