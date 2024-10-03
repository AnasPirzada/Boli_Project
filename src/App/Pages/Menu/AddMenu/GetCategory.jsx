import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../../../Components/constants.jsx';

const GetCategory = () => {
  const [categories, setCategories] = useState([]);
  localStorage.getItem('restaurantId');
  // Function to fetch categories from the server
  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const restaurantId = localStorage.getItem('restaurantId');
      if (!token) {
        toast.error('Token not found. Please login.');
        return;
      }

      const response = await axios.get(
        `${baseUrl}api/restaurant/getCategoriesById/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      setCategories(response.data.data.categories);
    } catch (error) {
      console.error('Error while fetching categories:', error);
      toast.error('Error while fetching categories');
    }
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to handle category deletion
  const handleDeleteCategory = async categoryId => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Authentication token not found');
        return;
      }

      console.log('Deleting category with ID:', categoryId);
      console.log('Token:', token);

      // Make the API request using the PUT method
      const response = await axios.put(
        `${baseUrl}/api/restaurant/deleteCategory/${categoryId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        }
      );
      console.log(response);

      if (response.data.message === 'Category deleted successfully.') {
        // After deletion, fetch the updated list of categories
        fetchCategories(); // This reloads the categories and updates categories.map with fresh data
        toast.success('Category deleted successfully');
      } else {
        throw new Error('Failed to delete category');
      }
    } catch (error) {
      console.error('Error while deleting category:', error);
      toast.error('Error while deleting category');
    }
  };

  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition='Bounce'
      />
      {categories.map(category => (
        <Row key={category._id}>
          <Col lg={5}>
            <div
              className='p-3 mb-3'
              style={{
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                boxShadow: '1px 2px 11.1px 0px #0000001A',
              }}
            >
              <p
                style={{
                  color: '#4C535F',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
                className='my-0'
              >
                {category.name}
              </p>
            </div>
          </Col>
          <Col lg={1}>
            <div className='d-flex' role='button'>
              <img src='/Trash Bin.svg' alt='' className='me-2' />
              <button
                className='d-flex bg-transparent'
                style={{
                  color: '#FD342A',
                  borderTop: '0px',
                  borderLeft: '0px',
                  borderRight: '0px',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderBottom: '1px solid #FD342A',
                }}
                onClick={() => handleDeleteCategory(category._id)}
              >
                Delete
              </button>
            </div>
          </Col>
        </Row>
      ))}

      <Row>
        <Col lg={8}></Col>
        <Col lg={2}>
          <button
            className='w-100'
            style={{
              backgroundColor: '#FFFFFF',
              color: '#00BF63',
              borderRadius: '8px',
              padding: '11px 30px',
              fontSize: '16px',
              fontWeight: '500',
              border: '1px solid #00BF63',
            }}
          >
            Back
          </button>
        </Col>
        <Col lg={2}>
          <button
            className='border-0 w-100'
            style={{
              padding: '11px 30px',
              backgroundColor: '#00BF63',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Done
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default GetCategory;
