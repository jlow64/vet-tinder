import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';
import mapStyles from '../mapStyles';
const containerStyle = {
  width: '600px',
  height: '600px',
};
const center = {
  lat: -36.9107212,
  lng: 174.7689044,
};
const options = {
  styles: mapStyles,
};
export default function MapView({ places }) {
  const [markerIndex, setMarkerIndex] = useState(null);
  // function which allocates an index to each marker. Markers ares displayed based on vet practice and a hover displays the label 
  const markerList = places.map((place, index) => {
    return (
      <Marker
        position={place.location}
        label={index == markerIndex ? place.name : ''}
        onMouseOver={() => setMarkerIndex(index)}
        labelStyle={{ background: '#fff' }}
        icon={{
          url: '/vet.png',
          scaledSize: new window.google.maps.Size(25, 25),
        }}
      />
    );
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBumm9agWYuB3_m_6p1sQH5n0YRfhuqxLE',
    id: 'google-map-script',
  });

  if (loadError) return 'Erorrrrr';
  if (!isLoaded) return 'Map not loaded';
  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
      >
        {markerList}
        <></>
      </GoogleMap>
    </div>
  );
}
