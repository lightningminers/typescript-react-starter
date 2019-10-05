import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import globalReduer from "./global";
import homeReduer from "../pages/home/flow";
import { IStoreState } from "./shared";

const reducers = combineReducers<IStoreState>({
  global: globalReduer,
  home: homeReduer,
});

const createMyStore = () => {
  const store = process.env.REACT_APP_RUN_MODE === "production" ? (
    createStore(reducers, applyMiddleware(thunk))
  ) : (
    window.__REDUX_DEVTOOLS_EXTENSION__? (
      createStore(reducers, compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__({})))
    ) : (
      createStore(reducers, applyMiddleware(thunk, logger))
    )
  );
  return store;
}

export default createMyStore;