import * as React from 'react';

export const Counter = props => (
  <React.Fragment>
    現在の値は
    {props.count}
    <br />
    <button onClick={() => props.up()}>up</button>
    <button onClick={() => props.down()}>down</button>
  </React.Fragment>
);
