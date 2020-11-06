import React from 'react';
import { Card } from 'react-bootstrap';
import CardStyleWrapper from '../../hoc/CardStyleWrapper';

type Props = {
  image: string,
  name: string,
  infoText: string
}
const ProfileInfo: React.FunctionComponent<Props> = ({image, name, infoText}) => {
  return (
    <CardStyleWrapper>
      <Card.Img variant="top" src={image} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>{infoText}</Card.Text>
    </CardStyleWrapper>
  );
}

export default ProfileInfo;
