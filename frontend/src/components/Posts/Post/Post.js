import React from 'react';
import PropyTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import HorizontalCard from '../../../hoc/HorizontalCard/HorizontalCard';

const ImageStyle = {
  maxWidth: '15%',
  height: 'auto',
  margin: '5px',
};

export default function Post(props) {
  return (
    <HorizontalCard>
      {props.image !== '' ? (
        <Image src={props.image} style={ImageStyle} />
      ) : null}
      <Card.Body className="text-left">
        <Card.Title>{props.user}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </HorizontalCard>
  );
}

Post.propTypes = {
  image: PropyTypes.string.isRequired,
  user: PropyTypes.string.isRequired,
  body: PropyTypes.string.isRequired,
};
