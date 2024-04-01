import React from 'react';
import "./Subscribe.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SubscribeTest() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="Subscribe">
            <h2>Like our news?
                <br/>Subscribe to our newsletter</h2>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01"
          className="Form1" >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02"
          className="Form1" >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03"
          className="Form1" >
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="email address" required />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04"
          className="Form1" >
          <Form.Label>Postcode</Form.Label>
          <Form.Control type="text" placeholder="Postcode" required />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default SubscribeTest;