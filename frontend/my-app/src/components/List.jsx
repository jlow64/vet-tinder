
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import axios from '../apis/backendReq';
import './../../src/componentscss/List.css'

const List = (props) => {
    const [places, setPlaces] = useState([]);
    useEffect(async () => {
        await axios.post('/distance', {
             location: props.location, 
             radius: props.radius,
         })
             .then(response => setPlaces(response.data));
             places.forEach((place) => {console.log(place)})
             console.log(places[2]);
    }, []);

    return (
    <div id='vetList'>
        <h1> List of Places </h1>
        <CardColumns>
            {places.map(place=> {
                return <Card bg ="light" border="secondary" style={{ width: '18rem' }}> 
                <Card.Body>
                    <Card.Title>
                        <div className="vetTitle">{place.name} </div> 
                    </Card.Title>
                    <Card.Text> 
                        <div className="address"> {place.vicinity}</div>
                    </Card.Text> 
                    <Button variant="info">Book</Button>
                </Card.Body>
                </Card>
            })
        } }
        </CardColumns>
    </div>
    );
};

export default List;
