import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Placeholder, Row } from 'react-bootstrap';
import { baseUrl } from '../../Components/constants.jsx';

export const TableAssignQR = () => {
  const [qrCodes, setQRCodes] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchQRCode = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${baseUrl}/api/restaurant/getQRCodes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      setQRCodes(response.data.qrCodes);
    } catch (error) {
      console.error('Error fetching QR codes:', error.response.data);
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

  // Fetch QR codes on component mount
  useEffect(() => {
    fetchQRCode();
  }, []);

  const renderSkeleton = () => (
    <Row className='mb-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <Col lg={3} md={3} xl={3} xs={6} key={index}>
          <Card className='mb-4' style={{ height: '100%' }}>
            <Card.Body>
              <Placeholder as={Card.Title} animation='wave'>
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='wave'>
                <Placeholder xs={4} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <Row className='mb-4'>
      {loading
        ? renderSkeleton() // Show skeleton while loading
        : qrCodes.map(qrCodeData => (
            <Col lg={3} md={3} xl={3} xs={6} key={qrCodeData._id}>
              <div>
                <div
                  className='d-flex justify-content-between align-items-center my-3'
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow:
                      '0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
                    borderRadius: '5.31px',
                  }}
                >
                  <p
                    className='ps-2'
                    style={{
                      color: '#4C535F',
                      fontSize: '17px',
                      fontWeight: '500',
                    }}
                  >
                    Table No.
                  </p>
                  <button
                    className='border-0 px-4 py-2'
                    style={{
                      color: '#4C535F',
                      fontSize: '15px',
                      fontWeight: '500',
                      boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001C',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                    }}
                  >
                    {`#${qrCodeData.tableNumber}`}{' '}
                    {/* Display the table number */}
                  </button>
                </div>

                <div className='mt-3'>
                  <p
                    className='my-0'
                    style={{
                      color: '#4C535F',
                      fontSize: '10.62px',
                      fontWeight: '500',
                    }}
                  >
                    Assign QR
                  </p>

                  <div
                    className='mt-3 py-4 d-flex justify-content-center align-items-center'
                    style={{
                      borderRadius: '5.31px',
                      height: '200px',
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      boxShadow:
                        ' 0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
                    }}
                  >
                    <img
                      src={qrCodeData.qrCode}
                      alt=''
                      className='object-fit-cover '
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundPosition: 'center',
                      }}
                    />{' '}
                  </div>

                  <Row className='my-3'>
                    <Col lg={6}>
                      <button
                        className='w-100'
                        style={{
                          padding: '7.3px 19.92px 7.3px 19.92px',
                          borderRadius: '5.31px',
                          backgroundColor: '#FFFFFF',
                          border: '0.66px solid #00BF63',
                          color: '#00BF63',
                          fontSize: '10.62px',
                          fontWeight: '500',
                        }}
                      >
                        Delete
                      </button>
                    </Col>
                    <Col lg={6}>
                      <button
                        className='border-0 w-100 text-nowrap'
                        style={{
                          padding: '7.3px 19.92px 7.3px 19.92px',
                          borderRadius: '5.31px',
                          color: '#FFFFFF',
                          backgroundColor: '#00BF63',
                          fontSize: '10.62px',
                          fontWeight: '500',
                        }}
                      >
                        Generate PDF
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))}
    </Row>
  );
};

export default TableAssignQR;
