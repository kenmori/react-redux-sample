import { handleActions } from 'redux-actions';
import { SUCCESS, FAILUER } from '../actions/examples';

const initialState = {
  data: [],
  error: {}
};
export const examples = handleActions(
  {
    [SUCCESS]: (state, action) =>
      console.log('---------', action) || {
        ...state,
        data: action.payload
      },
    [FAILUER]: (state, action) => ({ ...state, error: action.payload })
  },
  initialState
);
