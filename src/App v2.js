import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class App extends Component {
  static defaultProps = {
    center: {
      lat: 25.033182,
      lng: 121.543603
    },
    zoom: 16
  };

  render() {
    console.log(this.props.masksData)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEKEY}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.masksData.map(masks =>(
              <AnyReactComponent
                key={masks.properties.id}
                lat={masks.geometry.coordinates[1]}
                lng={masks.geometry.coordinates[0]}
                text={masks.properties.name}
              />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
