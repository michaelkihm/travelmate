import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Post from './Post';
import { Image, Card } from 'react-bootstrap';

configure({ adapter: new Adapter() });

const post = {
  user: 'test4',
  body: 'I will go to the USA',
  image: 'https://s.hdnux.com/photos/01/11/47/50/19298838/3/1200x0.jpg',
};

describe('<Post />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Post user={post.user} body={post.body} image={post.image} />
    );
  });

  it('should include an image', () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  it('should include a body', () => {
    expect(wrapper.find(Card.Text)).toHaveLength(1);
  });
  it('should include a user as <Card.Title />', () => {
    expect(wrapper.find(Card.Title)).toHaveLength(1);
  });

  it('should not include image if empty string in props', () => {
    wrapper.setProps({ user: post.user, body: post.body, image: '' });
    expect(wrapper.find(Image)).toHaveLength(0);
  });
});
