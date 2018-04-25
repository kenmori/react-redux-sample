import { INCREMENT, DECREMENT } from '../actions/Topic';
import { handleActions } from 'redux-actions';
const initialState = {
  count: 0
};

export const topic = handleActions(
  {
    [INCREMENT]: (state, action) => {
      return {
        ...state,
        count: state.count + 1
      };
    },
    [DECREMENT]: (state, action) => {
      return {
        ...state,
        count: state.count - 1
      };
    }
  },
  initialState
);
