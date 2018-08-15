import * as CONST from "./constants";
import { Dispatch } from "redux";

export function dataSync() {
  const syncData  = {
    type: CONST.SYNC_DATA,
    payload: {
      data: "syncId=https://github.com/icepy",
    },
  };
  return syncData;
}

export function dataAsync(parameter: string): (dispatch: Dispatch) => void {
  return (dispatch: Dispatch) => {
    const asyncData = {
      type: CONST.ASYNC_DATA,
      payload: {
        data: "asyncId=https://icepy.me",
      },
    };
    setTimeout(() => {
      dispatch(asyncData);
    }, 2000);
  };
}
