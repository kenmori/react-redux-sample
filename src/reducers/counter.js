import { handleActions } from 'redux-actions';
import { UP, DOWN } from '../actions/counter';

const initialState = {
  count: 0
};
export const counter = handleActions(
  {
    [UP]: (state, action) => ({ ...state, count: state.count + 1 }),
    [DOWN]: (state, action) => ({ ...state, count: state.count - 1 })
  },
  initialState
);
