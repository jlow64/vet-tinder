
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import vets from './../../src/vets.json';
import './../components.css/List.css'
import axios from 'axios';
console.log(vets)

const List = () => {
    
    return (
    <div id='vetList'>
        <CardColumns>
        {
            vets.map(vet=> {
                return <Card bg ="light" border="secondary" style={{ width: '18rem' }}> <Card.Body><Card.Title> {vet.name} </Card.Title>
                <Card.Text> <div className="address"> {vet.vicinity}</div></Card.Text> </Card.Body></Card>
            })
        }
        </CardColumns>
    </div>
    );
};

export default List;

