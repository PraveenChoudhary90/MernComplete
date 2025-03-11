
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'

function Registration() {
  return (
    <>
     <Form style={{margin:"auto", width:"500px"}}>
    <h1>Registration page</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default Registration