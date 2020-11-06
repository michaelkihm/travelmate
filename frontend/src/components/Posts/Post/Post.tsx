import React from 'react';
import { Card, Image } from 'react-bootstrap';
import HorizontalCard from '../../../hoc/HorizontalCard/HorizontalCard';

const ImageStyle = {
  maxWidth: '15%',
  height: 'auto',
  margin: '5px',
};

export type Props = {
  user: string,
  body: string,
  image: string,
}

const Post:React.FunctionComponent<Props>  = ({user, body ,image})  => {
  return (
    <HorizontalCard>
      {image !== '' ? (
        <Image src={image} style={ImageStyle} />
      ) : null}
      <Card.Body className="text-left">
        <Card.Title>{user}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </HorizontalCard>
  );
}

export default Post