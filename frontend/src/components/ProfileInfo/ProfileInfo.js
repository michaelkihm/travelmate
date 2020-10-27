import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardStyleWrapper from '../../hoc/CardStyleWrapper';

export default function ProfileInfo(props) {
  return (
    <CardStyleWrapper>
      <Card.Img variant="top" src={props.image} />
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.infoText}</Card.Text>
    </CardStyleWrapper>
  );
}

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};
