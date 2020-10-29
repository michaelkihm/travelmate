import React from 'react';
import { Card } from 'react-bootstrap';

const cardHorizontal = {
  display: 'flex',
  flex: '1 1 auto',
};

export default function HorizontalCard(props) {
  return (
    <Card className="mb-2">
      <div style={cardHorizontal}>{props.children}</div>
    </Card>
  );
}
