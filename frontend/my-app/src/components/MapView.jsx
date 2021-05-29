import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px',
};

const center = {
  lat: -36.9107212,
  lng: 174.7689044,
};

export default function MapView({ places }) {
  const [markerIndex, setMarkerIndex] = useState(null);
  const markerList = places.map((place, index) => {
    return <Marker position={place.location} label={index == markerIndex ? place.name : ''} onMouseOver={() => setMarkerIndex(index)} labelStyle={{background: '#fff'}} />
  });
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBumm9agWYuB3_m_6p1sQH5n0YRfhuqxLE',
    id: 'google-map-script',
  });

  if (loadError) return 'Erorrrrr';
  if (!isLoaded) return 'Map not loaded';
  return (
    <div >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {markerList}
        <></>
      </GoogleMap>
    </div>
  );
}
