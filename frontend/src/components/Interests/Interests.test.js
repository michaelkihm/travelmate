import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Interests from './Interests';
import { Badge } from 'react-bootstrap';

configure({ adapter: new Adapter() });

const inter = ['surfing', 'climbing', 'jogging', 'swimming'];

describe('<Interests />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Interests interests={inter} />);
  });

  it('Should include all interests', () => {
    expect(wrapper.find(Badge)).toHaveLength(inter.length);
  });
});
