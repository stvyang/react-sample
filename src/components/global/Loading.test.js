import React from 'react';
import { mount } from 'enzyme';
import Loading from './Loading';

test('Loading component should be rendered with className="loading"', () => {
  const wrapper = mount(<Loading />);
  expect(wrapper.find('div').hasClass('loading')).toBe(true);
});
