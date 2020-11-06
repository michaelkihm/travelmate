import React from 'react';
import PotentialTravelMate, {Props as MateType} from './PotentialTravelMate/PotentialTravelMate';
import { Card } from 'react-bootstrap';

type Props = {
  travelMates: MateType[]
}


 const PotentailTravelMates: React.FunctionComponent<Props> = ({travelMates}) =>{
  return (
    <Card className="p-2">
      <Card.Title>Could travel with you</Card.Title>
      <hr></hr>
      {travelMates.map((mate, i) => (
        <PotentialTravelMate
          user={mate.user}
          reason={mate.reason}
          image={mate.image ? mate.image : ''}
          key={`travel_mate_${i}`}
        />
      ))}
    </Card>
  );
}

export default PotentailTravelMates
