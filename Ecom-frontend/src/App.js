import React, { useState, useEffect } from 'react';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import CustomerService from './services/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [activeView, setActiveView] = useState('add'); // 'add' or 'view'

  const fetchCustomers = async () => {
    try {
      const data = await CustomerService.getCustomers();
      setCustomers(data);
    } catch (error) {
      toast.error('Failed to load customers');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async (customer) => {
    try {
      const added = await CustomerService.addCustomer(customer);
      setCustomers([...customers, added]);
      toast.success('Customer added');
      setActiveView('view'); // switch to view after add
    } catch (error) {
      toast.error('Failed to add customer');
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await CustomerService.deleteCustomer(id);
      setCustomers(customers.filter((c) => c.id !== id));
      toast.info('Customer deleted');
    } catch (error) {
      toast.error('Failed to delete customer');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Customer Manager
          </a>
          <div>
            <button
              className={`btn btn-outline-light me-2 ${activeView === 'add' ? 'active' : ''}`}
              onClick={() => setActiveView('add')}
            >
              Add Customers
            </button>
            <button
              className={`btn btn-outline-light ${activeView === 'view' ? 'active' : ''}`}
              onClick={() => setActiveView('view')}
            >
              View Customers
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        {activeView === 'add' && <AddCustomer onAdd={handleAddCustomer} />}
        {activeView === 'view' && (
          <CustomerList customers={customers} onDelete={handleDeleteCustomer} />
        )}
      </div>

      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
