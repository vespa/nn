import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import list from '../ducks/list';

const reducerMap = {
  list,
};

export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers(reducerMap),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
