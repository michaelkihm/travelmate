import React from 'react';
import PropTypes from 'prop-types';
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

export default function Interests(props) {
  const badgeStyle = {
    width: '25%',
    marginRight: '2px',
  };
  return (
    <CardStyleWrapper>
      <Card.Title>Interests</Card.Title>
      <div>
        {props.interests.map((interest, i) => (
          <Badge
            pip="true"
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

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};
