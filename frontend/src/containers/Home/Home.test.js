import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Home from './Home';
import { Row, Col } from 'react-bootstrap';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import NextTravels from '../../components/NextTravels/NextTravels';
import Interests from '../../components/Interests/Interests';
import Posts from '../../components/Posts/Posts';
import PotentailTravelMates from '../../components/PotentailTravelMates/PotentailTravelMates';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Should include 2 <Row />', () => {
    expect(wrapper.find(Row)).toHaveLength(2);
  });

  it('Should include 4 Cols', () => {
    expect(wrapper.find(Col)).toHaveLength(4);
  });

  it('Should include one <ProfileInfo />', () => {
    expect(wrapper.find(ProfileInfo)).toHaveLength(1);
  });

  it('Should include one <NextTravels />', () => {
    expect(wrapper.find(NextTravels)).toHaveLength(1);
  });

  it('Should include one <Interests />', () => {
    expect(wrapper.find(Interests)).toHaveLength(1);
  });

  it('Should include one <Posts />', () => {
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it('Should include one <PotentailTravelMates />', () => {
    expect(wrapper.find(PotentailTravelMates)).toHaveLength(1);
  });
});
