import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import NextTravels from '../../components/NextTravels/NextTravels';
import Interests from '../../components/Interests/Interests';
import Posts from '../../components/Posts/Posts';
import LeafletMap from '../../components/LefletMap/LeafletMap';

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
    img: 'https://s.hdnux.com/photos/01/11/47/50/19298838/3/1200x0.jpg',
  },
];

export default class Profile extends Component {
  state = {
    profileImg: profImg,
    nextTravels: Travels,
    interests: inter,
    name: 'Bill Gates',
    infoText: "Hello I'm the guy behind Windows OS",
    posts: posts,
  };
  render() {
    return (
      <Container fluid>
        <Row>
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
        </Row>

        <Row>
          <Col>
            <Posts posts={this.state.posts} />
          </Col>
        </Row>
      </Container>
    );
  }
}
