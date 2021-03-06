import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Interests from '../../components/Interests/Interests';
import LeafletMap from '../../components/LefletMap/LeafletMap';
import NextTravels from '../../components/NextTravels/NextTravels';
import Posts from '../../components/Posts/Posts';
import PotentailTravelMates from '../../components/PotentailTravelMates/PotentailTravelMates';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { Props as PostType } from '../../components/Posts/Post/Post'
import { Props as TravelMateType} from '../../components/PotentailTravelMates/PotentialTravelMate/PotentialTravelMate'

const Travels = ['India', 'Spain', 'Italy'];
const profImg =
  'https://img.welt.de/img/politik/ausland/mobile207593871/5432503607-ci102l-w1300/Bill-Gates-in-Brussels-to-Promote-Health-and-Clean-Energy-Initiatives.jpg';
const inter = ['surfing', 'climbing', 'jogging', 'swimming'];

const posts = [
  { user: 'John', body: 'I will go to India' },
  { user: 'test2', body: 'I will go to Austria' },
  {
    user: 'Mickenhos',
    body: 'I will go to the USA',
    image: 'https://s.hdnux.com/photos/01/11/47/50/19298838/3/1200x0.jpg',
  },
];

const travelMates = [
  { user: 'Mike', reason: 'Will go to India' },
  {
    user: 'Donny',
    reason: 'Will go to Vietnam',
    image: 'https://s3.amazonaws.com/cdn.gurneys.com/images/500/64587A_1.jpg',
  },
  {
    user: 'Anna',
    reason: 'Will be in Taiwan',
    image: 'https://s3.amazonaws.com/cdn.gurneys.com/images/500/64587A_1.jpg',
  },
];

type HomeState = {
  profileImg: string,
  nextTravels:string[],
  interests: string[],
  name: string,
  infoText: string,
  posts: PostType[],
  travelMates: TravelMateType[],

}

export class Home extends Component<{}, HomeState> {
  state = {
    profileImg: profImg,
    nextTravels: Travels,
    interests: inter,
    name: 'Bill Gates',
    infoText: "Hello I'm the guy behind Windows OS",
    posts: posts,
    travelMates: travelMates,
  };

  render() {
    return (
      <Container fluid>
        <Row className="m-2">
          <Col sm={2.5} className="bg-info">
            <ProfileInfo
              image={this.state.profileImg}
              name={this.state.name}
              infoText={this.state.infoText}
            />
            <NextTravels nextTravels={this.state.nextTravels} />
            <Interests interests={this.state.interests} />
          </Col>
          <Col>
            <LeafletMap />
          </Col>
          <Col>
            <PotentailTravelMates travelMates={this.state.travelMates} />
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Posts posts={this.state.posts} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
