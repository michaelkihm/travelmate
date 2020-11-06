import React from 'react';
import { Card, Image } from 'react-bootstrap';
import HorizontalCard from '../../../hoc/HorizontalCard/HorizontalCard';

export type Props = {
  image: string,
  user: string,
  reason: string
}

const ImageStyle = {
  maxWidth: '15%',
  height: 'auto',
  margin: '5px',
};
const PotentialTravelMate : React.FunctionComponent<Props> =({image, user, reason}) => {
  return (
    <HorizontalCard>
      {image !== '' ? (
        <Image src={image} style={ImageStyle} />
      ) : null}
      <Card.Body className="text-left">
        <Card.Title>{user}</Card.Title>
        <Card.Text>Why: {reason}</Card.Text>
      </Card.Body>
    </HorizontalCard>
  );
}

export default PotentialTravelMate;

