import React from 'react';
import PropTypes from 'prop-types';
import PotentialTravelMate from './PotentialTravelMate/PotentialTravelMate';
import { Card } from 'react-bootstrap';

export default function PotentailTravelMates(props) {
  return (
    <Card className="p-2">
      <Card.Title>Could travel with you</Card.Title>
      <hr></hr>
      {props.travelMates.map((mate, i) => (
        <PotentialTravelMate
          user={mate.user}
          reason={mate.reason}
          image={mate.img ? mate.img : ''}
          key={`travel_mate_${i}`}
        />
      ))}
    </Card>
  );
}
PotentailTravelMates.propTypes = {
  travelMates: PropTypes.arrayOf(PropTypes.object).isRequired,
};
