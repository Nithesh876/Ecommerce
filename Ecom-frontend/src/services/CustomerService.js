import axios from 'axios';

const API_URL = 'http://localhost:8080/customers'; // Make sure this URL matches your backend

const getCustomers = () => {
  return axios.get(API_URL);
};

const createCustomer = (customer) => {
  return axios.post(API_URL, customer);
};

const deleteCustomer = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const CustomerService = {
  getCustomers,
  createCustomer,
  deleteCustomer
};

export default CustomerService;