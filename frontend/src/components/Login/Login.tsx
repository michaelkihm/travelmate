import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

type Props = {
  interests: string[];
};

const Login: React.FunctionComponent<Props> = ({ interests }) => {
  return (
    <Card className="w-50 mx-auto my-0">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Login;
