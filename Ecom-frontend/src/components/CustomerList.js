import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Alert, Card } from 'react-bootstrap';
import CustomerService from '../services/CustomerService';

const CustomerList = ({ onCustomerDeleted }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await CustomerService.getCustomers();
      setCustomers(response.data);
    } catch (err) {
      setError('Failed to fetch customers. Please try again later.');
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await CustomerService.deleteCustomer(id);
      onCustomerDeleted();
    } catch (err) {
      setError('Failed to delete customer.');
      console.error('Error deleting customer:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [onCustomerDeleted]);

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Customer List</Card.Title>
        {loading && <div className="d-flex justify-content-center my-3"><Spinner animation="border" /></div>}
        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th> {/* Add a table header for City */}
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.city}</td> {/* Display the city */}
                    <td>{customer.email}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(customer.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No customers found.</td> {/* Update colspan */}
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomerList;