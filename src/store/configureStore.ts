import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { globalReducers } from './globalReducers';
import { homeReducers } from '@/pages/Home/flow/homeReducers';

/* eslint-disable no-underscore-dangle, no-undef */
const composeEnhancers = (<any> window) && (<any> window).REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const reducer = combineReducers({
  global: globalReducers,
  homePage: homeReducers,
});

export const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
