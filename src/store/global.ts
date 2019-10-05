import { IAction } from "./shared";

interface IUser{
  userId: number;
}

export interface IGlobal extends IUser{}

const initialState: IGlobal = {
  userId: 0,
};

const globalReduer = (state = initialState, action: IAction) => {
  return state;
}

export default globalReduer;
