import React from 'react';
import { shallow } from 'enzyme';
import List from './index';

describe('[Component: List]', () => {
  let wrapper;
  let e;
  const items = [
    { icon: 'icon-categoria', text: 'This is a text', type: 'test' },
  ];
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
      <List options={items} deletable />,
    );
  });

  it('should match snapshot', () => {
    wrapper = shallow(
      <List options={items} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    wrapper = shallow(
      <List options={items} deletable />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('[function] _removeFromList - should remove a item from the list ', () => {
    wrapper.instance()._showMessage = jest.fn();
    expect(wrapper.find('ul').find('li a').length).toBe(1);
    wrapper.find('ul').find('li a').prop('onClick')(e);
    expect(wrapper.instance()._showMessage.mock.calls.length).toBe(1);
  });
  it('[function] _showMessage - should update an status with an Object ', () => {
    expect(wrapper.state('messageConfirm')).toBe(null);
    wrapper.instance()._showMessage(e.parentNode);
    expect(wrapper.state('messageConfirm')).not.toBe(null);
  });

  it('[function] _cancelMessage - should clear the state messageConfirm back to null ', () => {
    expect(wrapper.state('messageConfirm')).toBe(null);
    wrapper.instance()._showMessage(e.parentNode);
    expect(wrapper.state('messageConfirm')).not.toBe(null);
    wrapper.instance()._cancelMessage();
    expect(wrapper.state('messageConfirm')).toBe(null);
  });
  it('[function] _callMessage - should call _cancelMessage ', () => {
    wrapper.instance()._cancelMessage = jest.fn();
    wrapper.instance()._callMessage(e.target)();
    expect(wrapper.instance()._cancelMessage.mock.calls.length).toBe(1);
  });
});
