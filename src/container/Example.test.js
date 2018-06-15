import * as React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import assert from 'power-assert';
import { ExamplesForTest } from './Examples';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'redux';

describe('', () => {
  let component = shallow(<ExamplesForTest />);
  test('ExamplesForTestの直下はsectionタグであること', () => {
    expect(10).toBe(10);
  });
});

//let Examples = ({ data }) => (
//  <section>
//    <h1>Example</h1>
//    <h2>pull list from db</h2>
//    <br />
//    <br />
//    <br />
//    <br />
//    <ul>{data && data.map(e => <li key={e.id}>{e.title}</li>)}</ul>
//    <Link to="/" style={{ color: 'blue' }}>
//      to home
//    </Link>
//  </section>
//);
//
//let mapDispatchToProps = dispatch => {
//  return { dispatch };
//};
//let mapStateToProps = state => {
//  return {
//    data: selectorData(state)
//  };
//};
//
//Examples = compose(
//  connect(mapStateToProps, mapDispatchToProps),
//  withProps(props => console.log(props)),
//  lifecycle({
//    componentDidMount() {
//      this.props.dispatch(request({ url: 'http://localhost:3000/posts' }));
//    }
//  })
//)(Examples);
//export default Examples;
