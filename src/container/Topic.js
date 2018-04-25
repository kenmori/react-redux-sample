//@flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, INCREMENT, DECREMENT } from '../actions/Topic';
import type { MapStateToProps } from 'react-redux';

const Topic = ({ count, increment, decrement }) => (
  <Fragment>
    <div>now count is {count}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </Fragment>
);

const mapStateToProps = state => {
  return {
    count: state.topic.count
  };
};
const mapDispatchToProps: MapStateToProps<*, *, *> = dispatch => {
  return {
    increment() {
      dispatch(increment());
    },
    decrement() {
      dispatch(decrement());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
