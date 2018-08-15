import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { ImainPageStoreState, mainPageReducers } from '@/pages/MainPage/flow/mainPageReducers';

/* eslint-disable no-underscore-dangle, no-undef */
export interface IStoreState {
  mainPage: ImainPageStoreState;
}

const composeEnhancers = (<any> window) && (<any> window).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const reducer = combineReducers({
  mainPage: mainPageReducers,
});

export const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);