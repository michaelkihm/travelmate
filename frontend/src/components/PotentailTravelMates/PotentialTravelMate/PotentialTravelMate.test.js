import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PotentialTravelMate from './PotentialTravelMate';
import { Card, Image } from 'react-bootstrap';

const travelMate = {
  user: 'Anna',
  reason: 'Will be in Taiwan',
  img: 'https://s3.amazonaws.com/cdn.gurneys.com/images/500/64587A_1.jpg',
};

configure({ adapter: new Adapter() });

describe('<PotentialTravelMate />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PotentialTravelMate
        user={travelMate.user}
        reason={travelMate.reason}
        image={travelMate.img}
      />
    );
  });

  it('Should include if image is given', () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  it('Should NOT include if image is empty string given', () => {
    wrapper.setProps({
      user: 'Anna',
      reason: 'Will be in Taiwan',
      image: '',
    });
    expect(wrapper.find(Image)).toHaveLength(0);
  });

  it('Should include username', () => {
    expect(wrapper.find(Card.Title).text()).toBe(travelMate.user);
  });

  it('Should include reason', () => {
    expect(wrapper.find(Card.Text).text()).toBe(`Why: ${travelMate.reason}`);
  });
});
