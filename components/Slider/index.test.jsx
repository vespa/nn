import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';

describe('[Component] Slider', () => {
  let wrapper;
  let e;
  beforeEach(() => {
    e = {
      preventDefault: () => {},
      target: {
        parentNode: {
          removeChild: jest.fn(),
        },
      },
    };
    wrapper = shallow(
      <Slider> <div /><div /><div /> </Slider>,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('[function] _goTo should change status', () => {
    wrapper.setState({ active: 1000, touchEnd: false });
    wrapper.instance()._next = jest.fn();
    wrapper.instance()._goTo(3)(e);
    expect(wrapper.state('touchEnd')).toBe(0);
    expect(wrapper.state('active')).toBe(2);
  });
});
