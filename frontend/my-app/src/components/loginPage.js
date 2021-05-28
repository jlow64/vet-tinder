import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../componentscss/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='login-div'>
            <Form>
            <h1>Vet Matcher</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Please log in with your email address.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    );
};

export default LoginPage;