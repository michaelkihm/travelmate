import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

configure({ adapter: new Adapter() });

const innerComponent = () => (
  <div>
    <h1>Hello</h1>
    <p>Body</p>
  </div>
);

describe('<PrivateRoute />', () => {
  it('Should include innerComponent if user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/test']}>
        <PrivateRoute
          exact
          path="/test"
          component={innerComponent}
          auth={{ isLoading: false, isAuthenticated: true }}
        />
      </MemoryRouter>
    );

    expect(wrapper.find(innerComponent)).toHaveLength(1);
    const history = wrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/test');
  });

  it('Should include Login if user is NOT authenticated', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/test']}>
        <PrivateRoute
          exact
          path="/test"
          component={innerComponent}
          auth={{ isLoading: false, isAuthenticated: false }}
        />
      </MemoryRouter>
    );
    const history = wrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/login');
  });
});
