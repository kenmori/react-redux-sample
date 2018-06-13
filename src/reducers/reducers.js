import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter } from './counter';
import { examples } from './examples';
const reducers = combineReducers({
  routing: routerReducer,
  counter,
  examples
});

export default reducers;
