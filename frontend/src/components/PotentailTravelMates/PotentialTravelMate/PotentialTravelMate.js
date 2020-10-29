import React from 'react';
import { Card, Image } from 'react-bootstrap';
import PropyTypes from 'prop-types';
import HorizontalCard from '../../../hoc/HorizontalCard/HorizontalCard';

const ImageStyle = {
  maxWidth: '15%',
  height: 'auto',
  margin: '5px',
};

export default function PotentialTravelMate(props) {
  return (
    <HorizontalCard>
      {props.image !== '' ? (
        <Image src={props.image} style={ImageStyle} />
      ) : null}
      <Card.Body className="text-left">
        <Card.Title>{props.user}</Card.Title>
        <Card.Text>Why: {props.reason}</Card.Text>
      </Card.Body>
    </HorizontalCard>
  );
}

PotentialTravelMate.propTypes = {
  image: PropyTypes.string.isRequired,
  user: PropyTypes.string.isRequired,
  reason: PropyTypes.string.isRequired,
};
