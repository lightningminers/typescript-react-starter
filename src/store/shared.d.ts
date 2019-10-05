import { IGlobal } from "./global";
import { IHome } from "../pages/home/flow";


export interface IStoreState {
  global: IGlobal,
  home: IHome,
}

export interface IAction {
  type: string;
  playload: any;
}