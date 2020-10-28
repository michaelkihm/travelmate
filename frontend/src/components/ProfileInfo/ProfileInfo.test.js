import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ProfileInfo from './ProfileInfo';
import { Card } from 'react-bootstrap';

configure({ adapter: new Adapter() });

const name = 'Bill Gates';
const text = "Hello I'm the guy behind Windows OS";
const img = 'image';

describe('<ProfileInfo />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProfileInfo name={name} infoText={text} image={img} />);
  });

  it('Should have Name prop as Title', () => {
    expect(wrapper.find(Card.Title).text()).toBe(name);
  });

  it('Should include text prop', () => {
    expect(wrapper.find(Card.Text).text()).toBe(text);
  });

  it('Should include image with src=prop.image', () => {
    expect(wrapper.contains(<Card.Img variant="top" src={img} />)).toEqual(
      true
    );
  });
});
