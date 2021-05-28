import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../componentscss/LoginPage.css';
import axios from '../apis/backendReq';


const LoginPage = ({ emailValidTrue }) => {
  const [email, setEmail] = useState('');

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post('/', {
        email: email,
      })
      .then((res) => {
        if (res.data !== "") {
            emailValidTrue();
            alert("Success!")
        } 
        else {
          alert("Not a registered/valid email address!");
        }
      });
  };

  return (
    <div className='login-div'>
      <Form>
        <h1>Vet Matcher</h1>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className='text-muted'>
            Please log in with your email address.
          </Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit' onClick={logIn}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
