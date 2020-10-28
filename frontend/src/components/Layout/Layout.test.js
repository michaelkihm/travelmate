import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Layout from './Layout';
import { Nav } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('Should include Home', () => {
    expect(wrapper.contains(<Nav.Link href="#home">Home</Nav.Link>)).toEqual(
      true
    );
  });

  it('Should include Profile', () => {
    expect(
      wrapper.contains(<Nav.Link href="#features">Profile</Nav.Link>)
    ).toEqual(true);
  });

  it('Should include Mesages', () => {
    expect(
      wrapper.contains(<Nav.Link href="#pricing">Mesages</Nav.Link>)
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
