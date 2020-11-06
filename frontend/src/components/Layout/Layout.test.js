import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Layout from './Layout';
import { NavLink } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('Should include Home', () => {
    console.log(wrapper);
    expect(
      wrapper.contains(
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
      )
    ).toEqual(true);
  });

  it('Should include Profile', () => {
    expect(
      wrapper.contains(
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      )
    ).toEqual(true);
  });

  it('Should include Mesages', () => {
    expect(
      wrapper.contains(
        <NavLink className="nav-link" to="/messages">
          Messages
        </NavLink>
      )
    ).toEqual(true);
  });

  it('should include wrapped nodes', () => {
    const nodes = (
      <div>
        <h1>Hello</h1>
        <p>Test</p>
      </div>
    );
    wrapper.setProps({ children: nodes });

    expect(wrapper.contains(nodes)).toEqual(true);
  });
});
