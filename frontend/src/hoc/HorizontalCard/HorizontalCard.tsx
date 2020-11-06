import React from 'react';
import { Card } from 'react-bootstrap';

const cardHorizontal = {
  display: 'flex',
  flex: '1 1 auto',
};

const HorizontalCard : React.FunctionComponent = (props) => {
  return (
    <Card className="mb-2">
      <div style={cardHorizontal}>{props.children}</div>
    </Card>
  );
}

export default HorizontalCard