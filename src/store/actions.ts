import { Dispatch } from "redux";
import * as CONST from "./constants";

export function setGlobalSyncId(dispatch: Dispatch): void {
  const globalSyncId = {
    payload: {
      data: "global_sync_id=https://github.com/icepy",
    },
    type: CONST.GLOBAL_SYNC_ID,
  };
  dispatch(globalSyncId);
}
