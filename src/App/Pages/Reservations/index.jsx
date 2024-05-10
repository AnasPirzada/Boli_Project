import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import UpcomingReservations from './Upcomming.jsx';
import CanceledReservations from './Canceled.jsx';
const index = () => {
  const [activeButton, setActiveButton] = useState('upcoming'); // Initial active button

  const handleButtonClick = button => {
    setActiveButton(button);
  };

  return (
    <>
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
            <SideBar activetabe='Reservations' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto' }}
          >
            <Row>
              <Navbar />
            </Row>
            <Row className='mt-4'>
              <div>
                <div>
                  <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                    <div className='p-4'>
                      <p
                        className='textColor'
                        style={{ fontSize: '22px', fontWeight: '700' }}
                      >
                        Reservations
                      </p>
                    </div>

                    <Row>
                      <Col lg={3}></Col>
                      <Col lg={5} className='d-flex '>
                        <button
                          className={`border-0 py-2 px-3 w-100 ${
                            activeButton === 'upcoming' ? 'active' : ''
                          }`}
                          style={{
                            backgroundColor:
                              activeButton === 'upcoming'
                                ? '#00BF63'
                                : '#FFFFFF',
                            borderRadius: '22px',
                            color:
                              activeButton === 'upcoming'
                                ? '#FFFFFF'
                                : '#A6A6A6',
                            fontSize: '10px',
                          }}
                          onClick={() => handleButtonClick('upcoming')}
                        >
                          Upcoming Reservations
                        </button>
                        <button
                          className={`border-0 py-2 px-3 w-100 ${
                            activeButton === 'canceled' ? 'active' : ''
                          }`}
                          style={{
                            backgroundColor:
                              activeButton === 'canceled'
                                ? '#00BF63'
                                : '#FFFFFF',
                            borderRadius: '22px',
                            color:
                              activeButton === 'canceled'
                                ? '#FFFFFF'
                                : '#A6A6A6',
                            fontSize: '10px',
                            boxShadow:
                              '2px 2px 12.100000381469727px 0px #00000014',
                          }}
                          onClick={() => handleButtonClick('canceled')}
                        >
                          Canceled Reservations
                        </button>
                      </Col>
                      <Col lg={4}></Col>
                    </Row>
                    {activeButton === 'upcoming' ? (
                      <UpcomingReservations />
                    ) : (
                      <CanceledReservations />
                    )}
                    {/* <p
                        style={{
                          color: '#4C535F',
                          fontSize: '14px',
                          fontWeight: '500',
                        }}
                      >
                        27/02/2024
                      </p>

                      <div
                        className='mt-3 shadow rounded-4 p-3 d-flex justify-content-between align-items-center '
                        style={{ backgroundColor: '#FFFFFF' }}
                      >
                        <p>01.</p>
                        <p>Thomas Shelby</p>
                        <p>16/02/2024</p>
                        <p>Table of 1</p>
                        <p>08:00 PM</p>
                      </div> */}
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
