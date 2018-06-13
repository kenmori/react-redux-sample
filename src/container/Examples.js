//@flow
import React from 'react';
import { Link } from 'react-router-dom';
import { lifecycle, compose, withProps } from 'recompose';
import { request } from '../actions/examples';
import { connect } from 'react-redux';
import { selectorData } from '../selector/examples';

let Examples = ({ data }) => (
  <section>
    <h1>Example</h1>
    <h2>pull list from db</h2>
    <br />
    <br />
    <br />
    <br />
    <ul>{data && data.map(e => <li key={e.id}>{e.title}</li>)}</ul>
    <Link to="/" style={{ color: 'blue' }}>
      to home
    </Link>
  </section>
);

let mapDispatchToProps = dispatch => {
  return { dispatch };
};
let mapStateToProps = state => {
  return {
    data: selectorData(state)
  };
};

Examples = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps(props => console.log(props)),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(request({ url: 'http://localhost:3000/posts' }));
    }
  })
)(Examples);
export default Examples;
