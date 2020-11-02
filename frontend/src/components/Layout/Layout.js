import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" className={'mb-2'}>
        <Navbar.Brand href="#home">Travelmate</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Profile</Nav.Link>
          <Nav.Link href="#pricing">Mesages</Nav.Link> */}
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav-link" to="/message">
            Messages
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <main>{props.children}</main>
    </Fragment>
  );
}
