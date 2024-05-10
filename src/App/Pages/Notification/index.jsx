import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
export const index = () => {
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow '
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <NavBar />
            </Row>

            <Row
              className='m-2'
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '2px 4px 71.80000305175781px 0px #0000000F',
              }}
            >
              <div className='p-3'>
                <p
                  style={{
                    color: '#00BF63',
                    fontSize: '22px',
                    fontWeight: '600',
                  }}
                >
                  Notifications
                </p>

                <p
                  className='my-3'
                  style={{
                    color: '#4C535F',
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  27/02/2024
                </p>

                <Row
                  className='d-flex p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Reservation.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Reservation
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: '#00BF63',
                          borderRadius: '50px',
                          width: '8px',
                          height: '8px',
                        }}
                      ></div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        Thomas Shelby made reservation.
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Menu List.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Item Added In Menu
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: '#00BF63',
                          borderRadius: '50px',
                          width: '8px',
                          height: '8px',
                        }}
                      ></div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New item has been added in desserts.{' '}
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/noti/Orders.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Oder Received
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: '#00BF63',
                          borderRadius: '50px',
                          width: '8px',
                          height: '8px',
                        }}
                      ></div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New order has been received from table 12.
                      </p>
                    </div>
                  </div>
                </Row>

                <p
                  className='my-3'
                  style={{
                    color: '#4C535F',
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  26/02/2024
                </p>

                <Row
                  className='d-flex p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Reservation.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Reservation
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        Thomas Shelby made reservation.
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Menu List.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Item Added In Menu
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New item has been added in desserts.{' '}
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/noti/Orders.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Oder Received
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New order has been received from table 12.
                      </p>
                    </div>
                  </div>
                </Row>

                <p
                  className='my-3'
                  style={{
                    color: '#4C535F',
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  25/02/2024
                </p>

                <Row
                  className='d-flex p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Reservation.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Reservation
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        Thomas Shelby made reservation.
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/Menu List.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Item Added In Menu
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New item has been added in desserts.{' '}
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/noti/Orders.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Oder Received
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New order has been received from table 12.
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/noti/Orders.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Oder Received
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New order has been received from table 12.
                      </p>
                    </div>
                  </div>
                </Row>
                <Row
                  className='d-flex my-3 p-3 m-1'
                  style={{
                    boxShadow: ' 0px 2px 9px 0px #00000014',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                  }}
                >
                  <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <img
                          src='/noti/Orders.svg'
                          alt=''
                          style={{ width: '30px', height: '29px' }}
                        />
                        <p
                          className='ms-3'
                          style={{
                            color: '#444444',
                            fontSize: '15px',
                            fontWeight: '400',
                          }}
                        >
                          Oder Received
                        </p>
                      </div>
                    </div>
                    <div className='ps-5'>
                      <p
                        style={{
                          color: '#A6A6A6',
                          fontSize: '15px',
                          fontWeight: '400',
                        }}
                      >
                        New order has been received from table 12.
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
