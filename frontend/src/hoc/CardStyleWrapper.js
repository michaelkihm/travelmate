import React from 'react';
import { Card } from 'react-bootstrap';

export default function CardStyleWrapper(props) {
  return (
    <Card bg="secondary" style={{ margin: '15px', width: '18rem' }}>
      {props.children}
    </Card>
  );
}
