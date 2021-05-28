import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100wh',
  height: '100vh',
};

const center = {
  lat: -36.9107212,
  lng: 174.7689044,
};

export default function MapView() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBumm9agWYuB3_m_6p1sQH5n0YRfhuqxLE',
    id: 'google-map-script',
  });

  if (loadError) return 'Erorrrrr';
  if (!isLoaded) return 'Map not loaded';
  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  );
}
