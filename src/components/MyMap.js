import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const flatMapStyle = require("./flatMapStyle.json");

// const MARKER1_CENTER = { lat: 22.6441819, lng: 120.3261663 };
// const MARKER2_CENTER = { lat: 32.6541819, lng: 132.3461663 };

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2ICkpt_Ju0z8rlO8I0xbA8b1p8Pu9JFI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    // markers: [ MARKER1_CENTER, MARKER2_CENTER ]
  }),
  withScriptjs,
  withGoogleMap,
)
  ((props) =>
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 25.059545, lng: 121.522549 }}
      defaultOptions={{ styles: flatMapStyle }}
    >
      {props.masksDataMark.map((data, index) => {
        console.log({lat: data.geometry.coordinates[0], lng: data.geometry.coordinates[1]})
        return (
          <Marker
            key={index}
            position = {{ lat: data.geometry.coordinates[1], lng: data.geometry.coordinates[0] }}
            onClick = {props.onMarkerClick}
          />
        )
      })}
    </GoogleMap>
  )

export default MyMapComponent;