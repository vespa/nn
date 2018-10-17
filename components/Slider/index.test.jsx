import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';

describe('[Component] Slider', () => {
  let wrapper;
  let e;
  beforeEach(() => {
    e = {
      preventDefault: () => {},
      touches: [{
        clientX: 666,
      }],
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

  it('[function] _next should change active and touchEnd status ', () => {
    wrapper.setState({ active: 3, touchEnd: false });
    const div = document.createElement('div');
    div.innerHTML = '<div style="width: 1000px; height: 100px ">x</div>;';
    wrapper.instance().ref = { };
    wrapper.instance().ref.current = div;

    wrapper.instance()._next(true);
    expect(wrapper.state('active')).toBe(4);

    wrapper.instance()._next(false);
    expect(wrapper.state('active')).toBe(3);
    expect(wrapper.state('touchEnd')).toBe(0);

    wrapper.setState({ active: -10 });
    wrapper.instance()._next(false);
    expect(wrapper.state('active')).toBe(0);

    wrapper.setState({ active: 10 });
    wrapper.instance()._next(false);
    expect(wrapper.state('active')).toBe(4);
  });

  it('[function] _setTouchEnd should trigger _next', () => {
    wrapper.instance()._next = jest.fn();
    wrapper.setState({ touchStart: 10, touchEnd: 300 });
    expect(wrapper.instance()._setTouchEnd()).toBe(true);
    expect(wrapper.instance()._next.mock.calls.length).toBe(1);
  });
  it('[function] _setTouchEnd should not trigger _next', () => {
    wrapper.instance()._next = jest.fn();
    wrapper.setState({ touchStart: 10, touchEnd: 11 });
    expect(wrapper.instance()._setTouchEnd()).toBe(true);
    expect(wrapper.instance()._next.mock.calls.length).toBe(0);
  });
  it('[function] _setTouchEnd should not trigger _next and return false', () => {
    wrapper.instance()._next = jest.fn();
    wrapper.setState({ touchStart: 10, touchEnd: 0 });
    expect(wrapper.instance()._setTouchEnd()).toBe(false);
    expect(wrapper.instance()._next.mock.calls.length).toBe(0);
  });
  it('[function] _setTouchStart should update status "touchStart"', () => {
    wrapper.setState({ touchStart: 10 });
    wrapper.instance()._setTouchStart(e);
    expect(wrapper.state('touchStart')).toBe(666);
  });
  it('[function] _setTouchCurrent should update status "touchStart"', () => {
    wrapper.setState({ touchEnd: 10 });
    wrapper.instance()._setTouchCurrent(e);
    expect(wrapper.state('touchEnd')).toBe(666);
  });
  it('[function] _updateResize should update status "active" and "touchend', () => {
    wrapper.setState({ active: 1000, touchEnd: false });
    wrapper.instance()._next = jest.fn();
    wrapper.instance()._updateResize();
    expect(wrapper.state('touchEnd')).toBe(0);
    expect(wrapper.state('active')).toBe(999);
  });
});
