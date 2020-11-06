import React from 'react';
import { Card } from 'react-bootstrap';

const CardStyleWrapper: React.FunctionComponent = (props) =>{
  return (
    <Card bg="secondary" style={{ margin: '15px', width: '18rem' }}>
      {props.children}
    </Card>
  );
}

export default CardStyleWrapper;