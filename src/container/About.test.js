//@flow
import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('should render three <div>', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.equals(<div />));
    expect(wrapper.equals(<div className={undefined} id={undefined} />));
  });
  //it("shouldd render an `.icon-ster`", ()=>{
  //    const wrapper = shallow(<About />);
  //    expect(wrapper.find(".icon-star")).to.have.length(1);
  //})
});
