import React from 'react';
import PropyTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const cardHorizontal = {
  display: 'flex',
  flex: '1 1 auto',
};

const ImageStyle = {
  maxWidth: '15%',
  height: 'auto',
  margin: '5px',
};

export default function Post(props) {
  return (
    <Card className="m-1">
      <div style={cardHorizontal}>
        {props.image !== '' ? (
          <Image src={props.image} style={ImageStyle} />
        ) : null}
        <Card.Body className="text-left">
          <Card.Title>{props.user}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

Post.propTypes = {
  image: PropyTypes.string.isRequired,
  user: PropyTypes.string.isRequired,
  body: PropyTypes.string.isRequired,
};
