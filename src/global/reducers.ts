import * as CONST from "./constants";
import { IAction, IGlobalStoreState } from "./types";

const initState: IGlobalStoreState = {
  globalAsyncId: "",
  globalSyncId: "",
};

export function globalReducers(state = initState, action: IAction): IGlobalStoreState {
  const { type, payload } = action;
  switch (type) {
    case CONST.GLOBAL_SYNC_ID:
      return { ...state, globalSyncId: payload.data };
    case CONST.GLOBAL_ASYNC_ID:
      return { ...state, globalAsyncId: payload.data };
    default:
      return { ...state };
  }
}
