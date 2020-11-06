import React ,{FunctionComponent} from 'react';
import { Card } from 'react-bootstrap';
import CardStyleWrapper from '../../hoc/CardStyleWrapper';

type Props = {
  nextTravels: string[]
}

const NextTravels:FunctionComponent<Props> = ({nextTravels}) =>{
  return (
    <CardStyleWrapper>
      <Card.Title>Next Travels</Card.Title>

      {nextTravels.map((dst, i) => (
        <Card.Text key={`travel_${i}`}>
          {dst}
          <br></br>
        </Card.Text>
      ))}
    </CardStyleWrapper>
  );
}

export default NextTravels
