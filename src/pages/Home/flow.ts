import { Dispatch } from "redux";
import { IAction } from "../../store/shared";

export type UpdateCount = (count: number) => void;
export type AsyncUpdateCount = (count: number) => void;

export interface IHomePage {
  count: number;
}

const HOME_UPDATE_COUNT = "HOME_UPDATE_COUNT";

/**
 * 同步更新计数器
 * @param count number
 */
export const updateCount = (count: number) => {
  const newCount = count + 1;
  return {
    type: HOME_UPDATE_COUNT,
    payload: newCount,
  }
}


/**
 * 异步更新计数器
 * @param count number
 * @param dispatch Dispatch<IAction>
 */
export const asyncUpdateCount = (count: number) => (dispatch: Dispatch<IAction>) => {
  setTimeout(() => {
    const newCount = count + 1;
    dispatch({
      type: HOME_UPDATE_COUNT,
      payload: newCount
    })
  }, 1000);
}

const initialState: IHomePage = {
  count: 0,
}

const homeReducer = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch(type) {
    case HOME_UPDATE_COUNT: {
      return {
        ...state, count: payload
      };
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;
