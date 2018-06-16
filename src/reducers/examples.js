import { handleActions } from 'redux-actions';
import { SUCCESS, FAILUER } from '../actions/examples';

const initialState = {
  data: [],
  error: {
    errorMessage: ''
  }
};
export const examples = handleActions(
  {
    [SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        error: { errorMessage: '' }
      };
    },
    [FAILUER]: (state, action) => ({
      ...state,
      error: { errorMessage: action.payload.error.errorMessage }
    })
  },
  initialState
);
