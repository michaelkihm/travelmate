import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Posts from './Posts';
import Post from './Post/Post';
import { Form } from 'react-bootstrap';

configure({ adapter: new Adapter() });

const posts = [
  { user: 'test', body: 'I will go to India', img: 'image.jpg' },
  { user: 'test2', body: 'I will go to Austria', img: 'image.jpg' },
  {
    user: 'test4',
    body: 'I will go to the USA',
    img: 'https://s.hdnux.com/photos/01/11/47/50/19298838/3/1200x0.jpg',
  },
];

describe('<Posts />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Posts posts={posts} />);
  });

  it('Should include 1 bootstrap <Form />', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('Should list each Post as <Post />', () => {
    expect(wrapper.find(Post)).toHaveLength(posts.length);
  });
});
