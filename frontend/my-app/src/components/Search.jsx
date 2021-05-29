import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

function Search() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBumm9agWYuB3_m_6p1sQH5n0YRfhuqxLE',
    id: 'google-map-script',
    libraries: ['places'],
  });
  const {
    ready,
    value,
    suggestions: { status, data, clearSuggestions },
    setValue,
  } = usePlacesAutocomplete({
    location: {
      lat: () => -36.9107212,
      lng: () => 174.7689044,
    },
    radius: 200 * 1000,
  });
  return (
      <div>
           <Combobox onSelect={(address) => console.log(address)}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder='Enter a address'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>   
      </div>

  );
}

export default Search;
