import React from 'react';
import '../scss/base/reset.css';
import { Link } from 'react-router-dom';
import { Counter } from '../components/Counter';
import { connect } from 'react-redux';
import { up, down } from '../actions/counter';

let CounterContainer = props => (
  <section>
    <Counter {...props} />
    <br />
    <br />
    <Link to="/" style={{ color: 'blue' }}>
      to home
    </Link>
  </section>
);

const mapDispatchToProps = (dispatch, props) => {
  return {
    up() {
      dispatch(up());
    },
    down() {
      dispatch(down());
    }
  };
};
const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
