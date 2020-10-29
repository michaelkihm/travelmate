import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import HorizontalCard from './HorizontalCard';

configure({ adapter: new Adapter() });

describe('<HorizontalCard />', () => {
  it('Should wrap around props.children', () => {
    const child = (
      <div>
        <h1>Hello </h1>
      </div>
    );
    const wrapper = shallow(<HorizontalCard>{child}</HorizontalCard>);

    expect(wrapper.contains(child)).toEqual(true);
  });
});
