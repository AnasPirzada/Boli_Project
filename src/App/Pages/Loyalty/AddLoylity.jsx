import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import { baseUrl } from '../../Components/constants.jsx';
import 'react-toastify/dist/ReactToastify.css';
import LoylityCard from './LoylityCard.jsx';
export const AddLoylity = () => {
  const [itemName, setItemName] = useState('');
  const [points, setPoints] = useState('');

  const handleAddItem = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${baseUrl}/api/restaurant/addCard?action=add`,
        {
          amount: String(itemName),
          points: parseInt(points),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set auth token in the request headers
          },
        }
      );
      if (response && response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.success('Item added successfully');
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
      />
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className=' text-center p-0 shadow '
            style={{
              backgroundColor: '#FFFFFF',
              height: '100vh',
            }}
          >
            <SideBar activetabe='Loyalty' />
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
              <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                <div className='d-flex justify-content-between align-items-center '>
                  <div className='p-4 d-flex flex-column justify-content-start align-items-start '>
                    <div>
                      <p
                        className='textColor'
                        style={{ fontSize: '22px', fontWeight: '700' }}
                      >
                        Loyalty Card
                      </p>
                    </div>
                  </div>
                </div>
                <LoylityCard />
                {/* Create Offer */}
                <div className='px-4 my-5'>
                  <Row className='px-0 md-px-2'>
                    <Col lg={6}>
                      <div className=' my-2 d-flex flex-column justify-content-start align-items-start'>
                        <p
                          style={{
                            fontWeight: '500',
                            fontSize: '16px',
                            color: '#4C535F',
                          }}
                        >
                          Amount
                        </p>
                        <input
                          className='w-100 border-0 p-3'
                          style={{
                            fontWeight: '500',
                            fontSize: '12px',
                            borderRadius: '8px',
                            color: '#4C535F',
                            boxShadow:
                              '1px 2px 11.100000381469727px 0px #0000001A',
                          }}
                          type='text'
                          placeholder='$60'
                          value={itemName}
                          onChange={e => setItemName(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className=' my-2 d-flex flex-column justify-content-start align-items-start'>
                        <p
                          style={{
                            fontWeight: '500',
                            fontSize: '16px',
                            color: '#4C535F',
                          }}
                        >
                          points
                        </p>
                        <input
                          className='w-100 border-0 p-3'
                          style={{
                            fontWeight: '500',
                            fontSize: '12px',
                            borderRadius: '8px',
                            color: '#4C535F',
                            boxShadow:
                              '1px 2px 11.100000381469727px 0px #0000001A',
                          }}
                          type='text'
                          placeholder='Enter points of the product'
                          value={points}
                          onChange={e => setPoints(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className='my-3 '>
                    <Col lg={3} xs={12} md={6}>
                      <button
                        className='border-0 w-100 mt-3  mt-md-0'
                        style={{
                          borderRadius: '8px',
                          color: '#00BF63',
                          fontSize: '16px',
                          padding: '11px 30px 11px 30px',
                          boxShadow: ' 2px 4px 17.6px 0px #0000002B',
                          fontWeight: '500',
                          backgroundColor: '#FFFFFF',
                        }}
                        onClick={handleAddItem}
                      >
                        Create New Offer
                      </button>
                    </Col>
                    <Col lg={6} xs={12} md={3}></Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddLoylity;
