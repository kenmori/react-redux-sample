//@flow
import React from 'react';
import { Link, Router } from 'react-router-dom';
import { lifecycle, compose, withProps } from 'recompose';
import { request } from '../actions/examples';
import { connect } from 'react-redux';
import { selectorData, selectorError } from '../selector/examples';
import styled from 'styled-components';

const Error = styled.div`
  color: palevioletred;
`;
const List = styled.ul`
  padding: 20px 30px;
`;

const Button = styled.button.attrs({
  //ここでpropsを指定もできる(呼び出し時ではなく)
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
  //共通部分はこの下に書く
})`
  font-size: 1em;
  border-radius: 3px;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

const StyledLink = Button.withComponent('a');
const ButtonExtend = Button.extend`
  border-color: green;
`;
Button.defaultProps = {
  theme: {
    main: '#0088ee'
  }
};

export let ExamplesForTest = ({ data, error }: { data: Object }) => (
  <section>
    <h1>Example</h1>
    <h2>pull list from db</h2>
    <br />
    <br />
    <Button>ボタン</Button>
    <Button size="2em">ボタン</Button>
    <StyledLink>リンク</StyledLink>
    <Button theme={{ main: 'red' }} />
    <ButtonExtend />
    <List>{data && data.map(e => <li key={e.id}>{e.title}</li>)}</List>
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
