import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { topic } from './topic';

const reducers = combineReducers({
  routing: routerReducer,
  topic: topic
});

export default reducers;
