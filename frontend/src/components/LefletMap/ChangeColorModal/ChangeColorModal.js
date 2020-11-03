import React, { Component } from 'react';
import { Modal, Button, Row } from 'react-bootstrap';
import './ChangeColorModal.css';

export default class ChangeColorModal extends Component {
  iconStyle = {
    margin: '0.2rem',
    fontSize: '1rem',
  };

  textStyle = {
    fontSize: '1rem',
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.country}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            onClick={() => this.props.changeColor('green')}
            className="hoverRow"
          >
            <i
              className="fas fa-circle"
              style={{ color: 'green', ...this.iconStyle }}
            ></i>
            <p style={this.textStyle}>Was here already</p>
          </Row>
          <Row
            onClick={() => this.props.changeColor('yellow')}
            className="hoverRow"
          >
            <i
              className="fas fa-circle"
              style={{ color: 'yellow', ...this.iconStyle }}
            ></i>
            <p style={this.textStyle}>Want to go here</p>
          </Row>
          <Row
            onClick={() => this.props.changeColor('orange')}
            className="hoverRow"
          >
            <i
              className="fas fa-circle"
              style={{ color: 'orange', ...this.iconStyle }}
            ></i>
            <p style={this.textStyle}>I am from here</p>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
