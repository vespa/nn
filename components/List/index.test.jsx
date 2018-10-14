import React from 'react';
import { shallow } from 'enzyme';
import List from './index';

describe('[Component: List]', () => {
  let wrapper;
  const items = [
    { icon: 'icon-categoria', text: 'This is a text' },
  ];
  beforeEach(() => {
    wrapper = shallow(
      <List items={items} />,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('[function] _removeFromList - should remove a item from the list ', () => {
    //
  });
});
