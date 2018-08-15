import * as CONST from './constants';
import { Dispatch } from 'redux';

export function setGlobalSyncId(dispatch: Dispatch): void {
  const globalSyncId = {
    type: CONST.GLOBAL_SYNC_ID,
    payload: {
      data: 'global_sync_id=https://github.com/icepy'
    }
  }
  dispatch(globalSyncId);
}

export function setGlobalAsyncId(): (dispatch: Dispatch) => void {
  return function (dispatch: Dispatch){
    const globalAsyncId = {
      type: CONST.GLOBAL_ASYNC_ID,
      payload: {
        data: 'global_async_id=https://icepy.me'
      }
    }
    dispatch(globalAsyncId);
  }
}
