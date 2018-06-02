//@flow
import React, { Component } from 'react';

type Props = {
  foo: string,
  id: number
};

export const Foo = ({ foo, id }: Props) => {
  return <div className={foo} id={id} />;
};

class About extends Component<{}> {
  render() {
    return <Foo foo="foo" id={9} />;
  }
}

export default About;
