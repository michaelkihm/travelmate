import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PotentialTravelMates from './PotentailTravelMates';
import PotentialTravelMate from './PotentialTravelMate/PotentialTravelMate';

const travelMates = [
  { user: 'Mike', reason: 'Will go to India' },
  {
    user: 'Donny',
    reason: 'Will go to Vietnam',
    img: 'https://s3.amazonaws.com/cdn.gurneys.com/images/500/64587A_1.jpg',
  },
  {
    user: 'Anna',
    reason: 'Will be in Taiwan',
    img: 'https://s3.amazonaws.com/cdn.gurneys.com/images/500/64587A_1.jpg',
  },
];

configure({ adapter: new Adapter() });

describe('<PotentialTravelMates />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PotentialTravelMates travelMates={travelMates} />);
  });

  it('Should include array of <TravelMate /> components', () => {
    expect(wrapper.find(PotentialTravelMate)).toHaveLength(travelMates.length);
  });
});
