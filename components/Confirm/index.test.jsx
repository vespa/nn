import React from 'react';
import { shallow } from 'enzyme';
import Message from './index';

describe('[Component: List]', () => {
  let changeMyValue;
  let wrapper;
  const callback = () => {
    changeMyValue = 'callback';
  };
  const cancel = () => {
    changeMyValue = 'cancel';
  };
  beforeEach(() => {
    wrapper = shallow(
      <Message callback={callback} cancel={cancel} message="teste" />,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change changeMyValue to "cancel"', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(changeMyValue).toEqual('cancel');
  });
  it('should change changeMyValue to "callback"', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(changeMyValue).toEqual('callback');
  });
});
