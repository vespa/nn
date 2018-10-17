import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('[Component] Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card>teste</Card>,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
