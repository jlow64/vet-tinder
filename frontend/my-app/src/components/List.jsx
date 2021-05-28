
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import vets from './../../src/vets.json';
import axios from 'axios';
import './../../src/componentscss/List.css'
console.log(vets)

const List = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        // GET request fetches list of places
        axios.get('http://localhost:3000/places')
            .then(response => setData(response.data.total));
    }, []);
    
    return (
    <div id='vetList'>
        <h1> List of Places </h1>
        <CardColumns>
        {
            vets.map(vet=> {
                return <Card bg ="light" border="secondary" style={{ width: '18rem' }}> 
                <Card.Body>
                    <Card.Title>
                        <div className="vetTitle">{vet.name} </div> 
                    </Card.Title>
                    <Card.Text> 
                        <div className="address"> {vet.vicinity}</div>
                    </Card.Text> 
                    <Button variant="info">Book</Button>
                </Card.Body>
                </Card>
            })
        }
        </CardColumns>
    </div>
    );
};

export default List;

