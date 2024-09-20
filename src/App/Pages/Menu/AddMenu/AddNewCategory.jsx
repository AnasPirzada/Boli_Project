import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';
import { baseUrl } from '../../../Components/constants.jsx';
import GetCategory from './GetCategory.jsx';

export const AddNewCategory = () => {
  const [name, setName] = useState('');

  const handleAddCategory = async () => {
    try {
      // Ensure name is not empty
      if (!name.trim()) {
        console.error('Category name cannot be empty');
        return;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }

      console.log('Sending request with name:', name); // Log the name value just before making the request

      const response = await axios.post(
        `${baseUrl}/api/restaurant/addCategory`,
        { categoryName: name }, // Send categoryName instead of name
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Category added successfully:', response.data);
      toast.success('Category added successfully');
      // Clear the input field after adding category
      setName('');

      // Optionally refresh categories if needed
    } catch (error) {
      console.error('Error while adding category:', error);
      toast.error('Error while adding category:');
      // Handle error here
    }
  };

  const handleChange = event => {
    setName(event.target.value);
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
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow '
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='Menu' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar />
            </Row>
            <Row className='mt-4'>
              <div className='m-2 p-3 shadow rounded-3 '>
                <div className='my-3'>
                  <p
                    style={{
                      color: '#00BF63',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    Add Category
                  </p>
                </div>

                <Row className='d-flex flex-column justify-content-start align-items-start '>
                  <Row className='d-flex justify-content-between align-items-center '>
                    <Col lg={4}>
                      <p
                        className='my-0 my-2'
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        New Category
                      </p>
                    </Col>
                    <Col lg={1} className='text-end'>
                      <div style={{ width: '45%' }}>
                        <p
                          className='my-0 cursor-pointer'
                          style={{
                            color: '#00BF63',
                            fontSize: '16px',
                            fontWeight: '500',
                            borderBottom: '1px solid #00BF63',
                            cursor: 'pointer',
                          }}
                          // Correct function handler for Add click
                          onClick={handleAddCategory}
                        >
                          Add
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <input
                        type='text'
                        className='w-100 border-0 p-2 rounded-2  shadow '
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={8}></Col>
                  </Row>
                </Row>

                <Row>
                  <Col lg={4}>
                    <button
                      className=' shadow w-100 mt-4'
                      style={{
                        padding: '10px 30px',
                        borderRadius: '8px',
                        border: '1px solid #00BF63',
                        fontSize: '14px',
                        fontWeight: '500',
                        backgroundColor: '#00BF6314',
                        color: '#00BF63',
                        boxShadow: '2px 4px 17.600000381469727px 0px #0000002B',
                      }}
                      // Add New Category button triggers the correct function
                      onClick={handleAddCategory}
                    >
                      Add New Category
                    </button>
                  </Col>
                  <Col lg={8}></Col>
                  <Row className='my-5'>
                    <Col>
                      <p
                        style={{
                          color: '#4C535F',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        Added Categories
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <GetCategory />
                  </Row>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddNewCategory;
