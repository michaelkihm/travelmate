import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Card } from 'react-bootstrap';
import NextTravels from './NextTravels';

configure({ adapter: new Adapter() });

const dsts = ['India', 'Australia'];

describe('<NextTravels />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NextTravels nextTravels={dsts} />);
  });
  it('should have a title', () => {
    expect(wrapper.find(Card.Title).text()).toBe('Next Travels');
  });

  it('Should have 2 <Card.Text /> nodes', () => {
    expect(wrapper.find(Card.Text)).toHaveLength(dsts.length);
  });
});
