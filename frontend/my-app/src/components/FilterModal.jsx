import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import searchbar from '../apis/GoogleSearchBar'
import RangeSlider from 'react-bootstrap-range-slider'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../componentscss/FilterModal.css'


const FilterModal = ({ emailValidFalse, passAddress, passRadius }) => {
    // this use state determines whether the modal will be displayed or not
    const [show, setShow] = useState(true);
    // the address isn't linked to the google search bar, but has functionality
    const [address, setAddress] = useState('');
    // used to stop API throttling by setting a timeout for each onChange
    const [debouncedAddress, setDebouncedAddress] = useState(address);
    // use state for current location 
    const [curLocation,setCurLoaction] = useState({});
    const [radius, setRadius] = useState(5);
    const handleClose = () => setShow(false);

    // used to handle onChange for address
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedAddress(address);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [address]);

    // only outputs the debounced address when address onChange has finished timeout
    useEffect(() => {
        console.log(debouncedAddress);
    }, [debouncedAddress]);

    // current function to get user location from browser, then set state of the curLocation
    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((pos) =>{
            setCurLoaction({
                lat:pos.coords.latitude,
                lng:pos.coords.longitude
            });
            console.log(curLocation);
        } ,() => null);
    }

    // modal component exports a form which currently only uses the get location button and range slider for inputs
    // user can then go back to loading screen or submit position to get calculated if the 'locate my position' button is pressed
    
    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Button variant="secondary" onClick={getCurrentLocation}> Locate my position</Button>
                <Modal.Header >
                    <Modal.Title>Please fill in the following fields:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="modalForm.AddressInput1">
                            <Form.Label>Current Location</Form.Label>
                            <Form.Control type="address" placeholder="Please type in an address" value={address} onChange={event => setAddress(event.target.value)} disabled />
                        </Form.Group>
                        <Form.Group controlId="formDistanceRadius">
                            <Form.Label>Distance (in Kilometers)</Form.Label>
                            <RangeSlider
                                value={radius}
                                onChange={event => setRadius(event.target.value)}
                                min={1}
                                max={15}
                            />
                        </Form.Group>
                        <Form.Group controlId="modalForm.PetClinicType">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Control as="select" disabled>
                            <option>Cats & Dogs</option>
                            <option>Small Rodents</option>
                            <option>Reptiles</option>
                            <option>Farm Animals</option>
                            <option>Exotic Creatures</option>
                            </Form.Control>
                        </Form.Group>   
                        <Form.Group controlId="modalForm.UrgentType">
                            <Form.Check type="checkbox" label="Is an emergency clinic required?" disabled />
                        </Form.Group>   
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose, emailValidFalse}>Go Back</Button>
                    <Link to={{
                        pathname: "/List",
                        aboutProps: {
                            location: curLocation,
                            radius:radius
                        }
                    }}>
                        <Button variant="primary" onClick={passAddress(debouncedAddress), passRadius(radius)}>Search for Vets!</Button>
                    </Link>
                </Modal.Footer>
                
            </Modal>
        </>
    );
};

export default FilterModal;