import { Dispatch } from "redux";
import { IAction } from "../../store/shared";

export interface IActions {
  updateCount: (count: number) => void;
  asyncUpdateCount: (count: number) => void;
}

export interface IHome {
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
    playload: newCount,
  }
}


/**
 * 异步更新计数器
 * @param count number
 * @param dispatch Dispatch<IAction>
 */
export const asyncUpdateCount = (count: number, dispatch: Dispatch<IAction>) => {
  setTimeout(() => {
    const newCount = count + 1;
    dispatch({
      type: HOME_UPDATE_COUNT,
      playload: newCount
    })
  }, 1000);
}

const initialState: IHome = {
  count: 0,
}

const homeReducer = (state = initialState, action: IAction) => {
  const { type, playload } = action;
  switch(type) {
    case HOME_UPDATE_COUNT: {
      return {
        ...state, count: playload
      };
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;
