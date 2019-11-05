import { IAction } from "./shared";

export type UpdateUserId = (userId: number) => IAction<number>;

export interface IGlobal {
  userId: number;
}

const GLOBAL_UPDATE_USERID = "GLOBAL_UPDATE_USERID";

export const updateUserId = (userId: number) => ({
  type: GLOBAL_UPDATE_USERID,
  payload: userId,
});

const initialState: IGlobal = {
  userId: 0,
};

const globalReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch(type) {
    case GLOBAL_UPDATE_USERID: {
      return {...state, userId: payload};
    }
    default: {
      return {...state};
    }
  }
}

export default globalReducer;
