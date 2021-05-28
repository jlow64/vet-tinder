import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import searchbar from '../apis/GoogleSearchBar'
import RangeSlider from 'react-bootstrap-range-slider'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../componentscss/FilterModal.css'


const FilterModal = ({ emailValidFalse, passAddress, passRadius }) => {
    const [show, setShow] = useState(true);
    const [address, setAddress] = useState('');
    const [radius, setRadius] = useState(5)
    const [debouncedAddress, setDebouncedAddress] = useState(address);
    const handleClose = () => setShow(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedAddress(address);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [address]);

    useEffect(() => {
        console.log(debouncedAddress);
    }, [debouncedAddress]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Please fill in the following fields:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="modalForm.AddressInput1">
                            <Form.Label>Current Location</Form.Label>
                            <Form.Control type="address" placeholder="Please type in an address" value={address} onChange={event => setAddress(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formDistanceRadius">
                            <Form.Label>Distance (in Kilometers)</Form.Label>
                            <RangeSlider
                                value={radius}
                                onChange={event => setRadius(event.target.value)}
                                min={5}
                                max={20}
                            />
                        </Form.Group>
                        <Form.Group controlId="modalForm.PetClinicType">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Control as="select">
                            <option>Cats & Dogs</option>
                            <option>Small Rodents</option>
                            <option>Reptiles</option>
                            <option>Farm Animals</option>
                            <option>Exotic Creatures</option>
                            </Form.Control>
                        </Form.Group>   
                        <Form.Group controlId="modalForm.UrgentType">
                            <Form.Label>Is this an Emergency?</Form.Label>
                            <Form.Control as="select">
                            <option>Yes</option>
                            <option>No</option>
                            </Form.Control>
                        </Form.Group>   
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose, emailValidFalse}>Go Back</Button>
                    <Link to='/Search'>
                        <Button variant="primary" onClick={passAddress(debouncedAddress), passRadius(radius)}>Search for Vets!</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilterModal;