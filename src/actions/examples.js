import { createAction } from 'redux-actions';

export const REQUEST = 'examples/REQUEST';
export const SUCCESS = 'examples/SUCCESS';
export const FAILUER = 'examples/FAILUER';

export const request = createAction(REQUEST);
export const success = createAction(SUCCESS);
export const failuer = createAction(FAILUER);
