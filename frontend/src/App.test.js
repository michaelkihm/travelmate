import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should include a <Layout /> component', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('should include <Home /> component', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
