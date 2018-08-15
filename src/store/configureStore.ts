import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { homeReducers } from '@/pages/Home/flow/homeReducers';
import { IHomePageStoreState } from '@/pages/Home/flow/types';

/* eslint-disable no-underscore-dangle, no-undef */
export interface IStoreState {
  homePage: IHomePageStoreState;
}

const composeEnhancers = (<any> window) && (<any> window).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const reducer = combineReducers({
  homePage: homeReducers,
});

export const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);