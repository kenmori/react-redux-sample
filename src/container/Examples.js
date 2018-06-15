//@flow
import React from 'react';
import { Link, Router } from 'react-router-dom';
import { lifecycle, compose, withProps } from 'recompose';
import { request } from '../actions/examples';
import { connect } from 'react-redux';
import { selectorData, selectorError } from '../selector/examples';
import styled from 'styled-components';

const Error = styled.div`
  color: #ef6b6b;
`;
export let ExamplesForTest = ({ data, error }: { data: Object }) => (
  <section>
    <h1>Example</h1>
    <h2>pull list from db</h2>
    <br />
    <br />
    <ul>{data && data.map(e => <li key={e.id}>{e.title}</li>)}</ul>
    <ul>
      {error.errorMessage && (
        <Error>
          this is error message<div>{error.errorMessage}</div>
        </Error>
      )}
    </ul>
    <br />
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
    data: selectorData(state),
    error: selectorError(state)
  };
};

let Examples = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps(props => console.log(props)),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(request({ url: 'http://localhost:3000/posts' }));
    }
  })
)(ExamplesForTest);
export default Examples;
