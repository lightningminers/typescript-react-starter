import { Dispatch } from "redux";
import * as CONST from "./constants";
import { IAction } from "./types";

export function setGlobalSyncId(): IAction {
  return {
    payload: {
      data: "global_sync_id=https://github.com/icepy",
    },
    type: CONST.GLOBAL_SYNC_ID,
  };
}
