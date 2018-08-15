import * as CONST from './constants';

export interface ImainPageAction {
  type: string;
  payload: any;
}

export interface ImainPageStoreState {
  syncId: string;
  asyncId: string;
}

const initState: ImainPageStoreState = {
  syncId: '默认值',
  asyncId: '默认值'
};

export function mainPageReducers(state=initState, action: ImainPageAction): ImainPageStoreState{
  const { type, payload } = action;
  switch(type) {
    case CONST.SYNC_DATA:
      return { ...state, syncId: payload.data };
    case CONST.ASYNC_DATA:
      return { ...state, asyncId: payload.data };
    default:
      return { ...state };
  }
}