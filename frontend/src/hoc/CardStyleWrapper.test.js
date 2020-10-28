import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import NextTravels from '../components/NextTravels/NextTravels';
import CardStyleWrapper from './CardStyleWrapper';

configure({ adapter: new Adapter() });

describe('<CardStyleWrapper />', () => {
  it('Should wrap around props.children', () => {
    const wrapper = shallow(
      <CardStyleWrapper>
        <NextTravels nextTravels={['India', 'Australia']} />
      </CardStyleWrapper>
    );

    expect(
      wrapper.contains(<NextTravels nextTravels={['India', 'Australia']} />)
    ).toEqual(true);
  });

  it('Should have background secondary', () => {
    const wrapper = shallow(<CardStyleWrapper>Hello</CardStyleWrapper>);

    expect(wrapper.prop('bg')).toBe('secondary');
  });
});
