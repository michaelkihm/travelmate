import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import CardStyleWrapper from '../../hoc/CardStyleWrapper';

export default function NextTravels(props) {
  return (
    <CardStyleWrapper>
      <Card.Title>Next Travels</Card.Title>

      {props.nextTravels.map((dst, i) => (
        <Card.Text key={`travel_${i}`}>
          {dst}
          <br></br>
        </Card.Text>
      ))}
    </CardStyleWrapper>
  );
}

NextTravels.propTypes = {
  nextTravels: PropTypes.arrayOf(PropTypes.string).isRequired,
};
