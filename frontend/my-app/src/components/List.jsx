import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import axios from '../apis/backendReq';
import './../../src/componentscss/List.css';
import MapView from './MapView';

const List = (props) => {
  const [places, setPlaces] = useState([]);
  // api fetch to the backend
  useEffect(async () => {
    console.log(props.location.aboutProps);
    await axios
      .post('/distance', {
        location: props.location.aboutProps.location,
        radius: props.location.aboutProps.radius,
      })
      .then((response) => setPlaces(response.data));
    places.forEach((place) => {
      console.log(place);
    });
    console.log(places[2]);
  }, []);
  // returns component which renders vets in range + map with markers. Takes in the places as a prop.
  return (
    <div id='vetList'>
      <h1> List of Places </h1>
        <div id='row-container' >
          <div id='col1' >
            <CardColumns>
              {places.map((place) => {
                return (
                  <Card bg='light' border='secondary' style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>
                        <div className='vetTitle'>{place.name} </div>
                      </Card.Title>
                      <Card.Text>
                        <div className='address'> {place.vicinity}</div>
                      </Card.Text>
                      <Button variant='info'>Book</Button>
                    </Card.Body>
                  </Card>
                );
              })}{' '}
            </CardColumns>
          </div>
          <div id='col2' >
            <MapView places={places} />
          </div>
        </div> 
    </div>
  );
};

export default List;
