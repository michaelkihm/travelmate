import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import CardStyleWrapper from '../../hoc/CardStyleWrapper';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
];

type Props = {
  interests: string[],
}

const Interests :React.FunctionComponent<Props> = ({interests}) =>{
  const badgeStyle = {
    width: '25%',
    marginRight: '2px',
  };
  return (
    <CardStyleWrapper>
      <Card.Title>Interests</Card.Title>
      <div>
        {interests.map((interest, i) => (
          <Badge
            // pip= {true}
            variant={variants[Math.floor(Math.random() * variants.length)]}
            style={badgeStyle}
            key={`interest_${i}`}
          >
            {interest}
          </Badge>
        ))}
      </div>
    </CardStyleWrapper>
  );
}

export default Interests