import * as CONST from './constants';
import { Dispatch } from "redux";

export function dataSync() {
  let syncData  = {
    type: CONST.SYNC_DATA,
    payload: {
      data: 'syncId=https://github.com/icepy',
    }
  };
  return syncData;
}

export function dataAsync(parameter: string): (dispatch: Dispatch) => void {
  return function(dispatch: Dispatch){
    let asyncData = {
      type: CONST.ASYNC_DATA,
      payload: {
        data: 'asyncId=https://icepy.me'
      }
    };
    setTimeout(() => {
      dispatch(asyncData);
    }, 2000);
  }
}
