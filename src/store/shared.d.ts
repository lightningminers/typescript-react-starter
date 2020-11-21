import { IGlobal } from "./global";
import { IHomePage } from "../pages/Home/flow";


export interface IStoreState {
  global: IGlobal,
  homePage: IHomePage,
}

export interface IAction<T=any> {
  type: string;
  payload: T;
}
