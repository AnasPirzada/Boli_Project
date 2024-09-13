import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import FoodReservations from './FoodReservations.jsx';
import Reservations from './Reservations.jsx';
export const index = () => {
  const [activeButton, setActiveButton] = useState('Food'); // Initial active button

  const handleButtonClick = button => {
    setActiveButton(button);
  };

  return (
    <div>
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
            <SideBar activetabe='History' />
          </Col>
          <Col md={10} xs={10}>
            <Row>
              <Navbar />
            </Row>
            <Row
              className='mt-4 custom-scrollbar'
              style={{ height: '100vh', overflowY: 'auto' }}
            >
              <div>
                <div>
                  <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                    <div className='p-4'>
                      <p
                        className='textColor'
                        style={{ fontSize: '22px', fontWeight: '700' }}
                      >
                        History
                      </p>
                    </div>

                    <Row className='mt-4'>
                      <div>
                        <Row>
                          <Col lg={3}></Col>
                          <Col lg={5}>
                            <div
                              className='w-100 d-flex '
                              style={{
                                boxShadow:
                                  '2px 2px 12.100000381469727px 0px #00000014',
                                border: ' 2px solid #FFFFFF',
                                borderRadius: '22px',
                              }}
                            >
                              <button
                                className={`border-0 py-2 px-3 w-100 ${
                                  activeButton === 'Food' ? 'active' : ''
                                }`}
                                style={{
                                  backgroundColor:
                                    activeButton === 'Food'
                                      ? '#00BF63'
                                      : '#FFFFFF',
                                  borderRadius: '22px',
                                  color:
                                    activeButton === 'Food'
                                      ? '#FFFFFF'
                                      : '#A6A6A6',
                                  fontSize: '10px',
                                }}
                                onClick={() => handleButtonClick('Food')}
                              >
                                Food Order’s
                              </button>
                              <button
                                className={`border-0 py-2 px-3 w-100 ${
                                  activeButton === 'Reservations'
                                    ? 'active'
                                    : ''
                                }`}
                                style={{
                                  backgroundColor:
                                    activeButton === 'Reservations'
                                      ? '#00BF63'
                                      : '#FFFFFF',
                                  borderRadius: '22px',
                                  color:
                                    activeButton === 'Reservations'
                                      ? '#FFFFFF'
                                      : '#A6A6A6',
                                  fontSize: '10px',
                                }}
                                onClick={() =>
                                  handleButtonClick('Reservations')
                                }
                              >
                                Reservations
                              </button>
                            </div>
                          </Col>
                          <Col lg={4}></Col>
                        </Row>
                        {activeButton === 'Food' ? (
                          <FoodReservations />
                        ) : (
                          <Reservations />
                        )}
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
