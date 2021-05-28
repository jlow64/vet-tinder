import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../componentscss/LoginPage.css'
//import axios from '../apis/backendReq'
import FilterModal from "./FilterModal"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const logIn = () => {
        setEmailValid(true);
        console.log(email);
    }
    const goBack = () => {
        setEmailValid(false)
    };
    return (
    <div className='login-div'>
        {emailValid ? (
            <FilterModal modalState={goBack} />
        ) : (
            <Form>
            <h1>Vet Matcher</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                Please log in with your email address.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={logIn}>
                Submit
            </Button>
        </Form>

        )}
            
    </div>
    );
};

export default LoginPage;