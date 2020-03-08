import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = { width: '100%', height: '100%' };
 
export class MapContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    };
 
    render() {
        return (
        <div className="map">
        <Map
            google={this.props.google}
            style={style}
            zoom={16}
            initialCenter={{
                lat: 25.033182,
                lng: 121.543603
              }}
            onClick={this.onMapClicked}
        >
 
        {this.props.masksData.map((masks, index) => (
            <Marker
                key={index}
                onClick={this.onMarkerClick}
                name={masks.properties.name}
                position={{
                    lat: masks.geometry.coordinates[1],
                    lng: masks.geometry.coordinates[0]
                }}
            />
        ))}
 
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onMapClicked}
          visible={this.state.showingInfoWindow}
        >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (`${process.env.REACT_APP_GOOGLEKEY}`)
})(MapContainer)