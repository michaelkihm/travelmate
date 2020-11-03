import React, { Component, Fragment } from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import mapData from '../../assets/countries.json';

import 'leaflet/dist/leaflet.css';
import './LeafletMap.css';

import ChangeColorModal from './ChangeColorModal/ChangeColorModal';

export default class LeafletMap extends Component {
  state = {
    color: '#ffff00',
    showModal: false,
    selectedCountry: '',
    currentEvent: null,
  };

  colors = ['green', 'blue', 'yellow', 'grey', 'orange'];

  countryStyle = {
    fillColor: 'grey', //country color
    fillOpacity: 1, //country opacity 0-1
    color: 'black', //border color
    weight: 2, //border thickness
    //dashArray: 5, //dashed border
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindTooltip(countryName);

    layer.on({
      click: (event) => this.openPopUp(event, countryName),
    });
  };

  openPopUp = (event, countryName) => {
    this.setState({
      showModal: true,
      selectedCountry: countryName,
      currentEvent: event,
    });
  };

  changeCountryColor = (color) => {
    this.state.currentEvent.target.setStyle({
      fillColor: color,
    });
    this.setState({ showModal: false });
  };
  render() {
    let addModalClose = () => this.setState({ showModal: false });
    return (
      <Fragment>
        <Map zoom={2} center={[20, 100]}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </Map>
        <ChangeColorModal
          show={this.state.showModal}
          onHide={addModalClose}
          country={this.state.selectedCountry}
          changeColor={this.changeCountryColor}
        />
      </Fragment>
    );
  }
}
