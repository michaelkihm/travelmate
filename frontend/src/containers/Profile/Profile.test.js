import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Profile from './Profile';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import NextTravels from '../../components/NextTravels/NextTravels';
import Interests from '../../components/Interests/Interests';
import Posts from '../../components/Posts/Posts';
import LeafletMap from '../../components/LefletMap/LeafletMap';

configure({ adapter: new Adapter() });

describe('<Profile />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it('Should include 2 <Row />', () => {
    expect(wrapper.find(Row)).toHaveLength(2);
  });

  it('Should include 3 <Col />', () => {
    expect(wrapper.find(Col)).toHaveLength(3);
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

  it('Should include one <LeafletMap />', () => {
    expect(wrapper.find(LeafletMap)).toHaveLength(1);
  });
});
