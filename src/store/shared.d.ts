import { IGlobal } from "./global";
import { IHomePage } from "../pages/home/flow";


export interface IStoreState {
  global: IGlobal,
  homePage: IHomePage,
}

export interface IAction<T=any> {
  type: string;
  playload: T;
}
