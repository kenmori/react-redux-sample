import { createAction } from 'redux-actions';

export const UP = 'counter/UP';
export const DOWN = 'counter/DOWN';

export const up = createAction(UP);
export const down = createAction(DOWN);
