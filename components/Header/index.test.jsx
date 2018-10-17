import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('[Component: List]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header currentBalance="1,00" customer="Juca" date={2018} />,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
