import React, { useState } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
} from 'react-google-maps';
import mapStyle from './mapStyle';

function Map({data}) {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return(
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: 25, lng: 122 }}
            defaultOptions={{ styles: mapStyle }}
            // 地圖生成前先取得座標在傳入->先判斷有無取得
            defaultClickableIcons={false} // 地標資訊
        >
        {data.map(data => (
        <Marker
            key={data.properties.id}    
            position={{
                lat: data.geometry.coordinates[1],
                lng: data.geometry.coordinates[0] 
            }}
            onClick={() => {
                setSelectedMarker(data)
            }}
            // icon={{
            //     url: '/pharmacy.svg'
            // }}
        />
        ))}

        {selectedMarker && (
            <InfoWindow
                position={{
                    lat: selectedMarker.geometry.coordinates[1],
                    lng: selectedMarker.geometry.coordinates[0]
                }}
                onCloseClick={() => {
                    setSelectedMarker(null);
                }}
            >
                <div>
                    <div>藥局名稱: {selectedMarker.properties.name}</div>
                    <div>電話: {selectedMarker.properties.phone}</div>
                    <div>地址: {selectedMarker.properties.address}</div>
                    <div>成人口罩數量: {selectedMarker.properties.mask_adult}</div>
                    <div>孩童口罩數量: {selectedMarker.properties.mask_child}</div>
                </div>

            </InfoWindow>
        )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App({masksData}) {
    return (
        <div>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLEKEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                data={masksData}
            />
        </div>
    );
}
