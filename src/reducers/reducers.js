import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter } from './counter';
const reducers = combineReducers({
  routing: routerReducer,
  counter: counter
});

export default reducers;
