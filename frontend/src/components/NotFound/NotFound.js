import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Jumbotron>
      <h1>404</h1>
      <h2>UH OH! You're lost</h2>
      <p>This page you are looking does not exist!</p>
    </Jumbotron>
  );
}
