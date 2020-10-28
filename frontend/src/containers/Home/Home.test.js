import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Home from './Home';
import { Row, Col } from 'react-bootstrap';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import NextTravels from '../../components/NextTravels/NextTravels';
import Interests from '../../components/Interests/Interests';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Should include one row', () => {
    expect(wrapper.find(Row)).toHaveLength(1);
  });

  it('Should include three Cols', () => {
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
});
