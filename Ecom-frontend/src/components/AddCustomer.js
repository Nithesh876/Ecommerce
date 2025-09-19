import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import CustomerService from '../services/CustomerService';

const AddCustomer = ({ onCustomerAdded }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState(''); // Add state for city
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = { name, city, email }; // Include city in the object
    try {
      await CustomerService.createCustomer(newCustomer);
      setName('');
      setCity(''); // Clear the city input
      setEmail('');
      onCustomerAdded();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <Card className="my-4 p-4">
      <Card.Body>
        <Card.Title>Add New Customer</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Customer
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddCustomer;