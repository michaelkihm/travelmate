import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Interests from '../../components/Interests/Interests';
import NextTravels from '../../components/NextTravels/NextTravels';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

const Travels = ['India', 'Spain', 'Italy'];
const profImg =
  'https://img.welt.de/img/politik/ausland/mobile207593871/5432503607-ci102l-w1300/Bill-Gates-in-Brussels-to-Promote-Health-and-Clean-Energy-Initiatives.jpg';
const inter = ['surfing', 'climbing', 'jogging', 'swimming'];
export class Home extends Component {
  state = {
    profileImg: profImg,
    nextTravels: Travels,
    interests: inter,
    name: 'Bill Gates',
    infoText: "Hello I'm the guy behind Windows OS",
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
          <Col>col2 (wider)</Col>
          <Col>col3</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
