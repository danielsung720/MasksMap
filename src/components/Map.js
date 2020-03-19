import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=
        ${process.env.REACT_APP_GOOGLEKEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentDidMount() {
            navigator.geolocation.getCurrentPosition((position) => this.successCallback(position));
        },
        successCallback(position) {  
            this.setState({
                center: { lat: position.coords.latitude, lng: position.coords.longitude }
            });
            console.log(this.state.center)
        }
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        zoom={16}
        center={props.center}
        onClick={() => {props.selectedMarker(null)}}
    >

        <Marker
            position={props.center}
            icon={{url: '/position.png'}}
        />

        {props.masksData.map(data => (
            <Marker
                key={data.properties.id}    
                position={{
                    lat: data.geometry.coordinates[1],
                    lng: data.geometry.coordinates[0] 
                }}
                onClick={() => {props.selectedMarker(data)}}
            />
        ))}

        {props.info && (
            <InfoWindow
                position={{
                    lat: props.info.geometry.coordinates[1],
                    lng: props.info.geometry.coordinates[0]
                }}
                onCloseClick={() => {props.selectedMarker(null)}}
            >
                <div>
                    <div><h1>藥局名稱: {props.info.properties.name}</h1></div>
                    <div style = {{ fontWeight: '900' }}>電話: {props.info.properties.phone}</div>
                    <div style = {{ fontWeight: '900' }}>地址: {props.info.properties.address}</div>
                    <div >
                        <a href = {`https://www.google.com.tw/maps/place/${props.info.properties.address}`}
                            style = {{ textDecoration: 'none', fontWeight: '900' }}
                        >
                            在google地圖上開啟
                        </a>
                    </div>
                    <div style = {{ display: 'flex', justifyContent: 'space-around', marginTop: '5px' }}>
                        <div style = {{ margin: '5px', padding: '15px', fontWeight: '900', background: '#77FFEE', fontSize: '14px', borderRadius: '10px' }} >成人口罩數量: {props.info.properties.mask_adult}</div>
                        <div style = {{ margin: '5px', padding: '15px', fontWeight: '900', background: '#77FFEE', fontSize: '14px', borderRadius: '10px' }} >孩童口罩數量: {props.info.properties.mask_child}</div>
                    </div>
                </div>
            </InfoWindow>
        )}
    </GoogleMap>
)
export default Map