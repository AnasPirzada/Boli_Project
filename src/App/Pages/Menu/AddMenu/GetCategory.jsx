import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../../../Components/constants.jsx';

const GetCategory = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in localStorage');
          toast.error('Token not found. Please login.');
          return;
        }

        const response = await axios.get(
          `${baseUrl}/api/restaurant/getCategories`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ensure token is properly passed
            },
          }
        );

        console.log('Categories fetched successfully:', response.data);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error while fetching categories:', error);
        toast.error('Error while fetching categories');
      }
    };

    fetchCategories();
  }, []);

  // Function to handle category deletion
  const handleDeleteCategory = async categoryId => {
    try {
      console.log('Deleting category with ID:', categoryId); // Log the correct ID
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Authentication token not found');
        return;
      }
      console.log('token', token);

      // Make the API request to delete the category using the DELETE method
      const response = await axios.put(
        `${baseUrl}/api/restaurant/deleteCategory/${categoryId}`, // Use DELETE method
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        }
      );

      if (response.data.message === 'Category deleted successfully') {
        // Remove the deleted category from the state
        setCategories(
          categories.filter(category => category._id !== categoryId)
        );
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
                // Add the delete function to the onClick event
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
