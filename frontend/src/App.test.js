import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

jest.mock('leaflet');

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should include a <Layout /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('Should only include Layout and Home components for route /home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Profile)).toHaveLength(0);
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('Root directory should lead to <Home /> route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Profile)).toHaveLength(0);
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('Should only include <Layout /> and <Profile /> components for route /profile', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(1);
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('Should only include <Layout /> and <NotFound /> components for some random route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/rand']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
