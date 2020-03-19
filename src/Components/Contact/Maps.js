import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: "Kaan is here!"
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    return (
      <div>
        <Map
          style={{ width: "100%", height: "100%", position: "relative" }}
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 40.993927,
            lng: 28.886346
          }}
        >
          <Marker
            position={{ lat: 40.993927, lng: 28.886346 }}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1 style={{ color: "red", backgroundColor: "silver" }}>
                Kaan is here!
              </h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-auujTl2uEYhME6JHmZOE2n8hiZZFJcs"
})(Maps);
