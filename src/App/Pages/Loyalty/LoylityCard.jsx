import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { baseUrl } from '../../Components/constants.jsx';

const LoylityCard = () => {
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        const response = await fetch(
          `${baseUrl}/api/restaurant/getCard?action=get`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch card data');
        }

        const responseData = await response.json();
        if (Array.isArray(responseData.loyaltyCard)) {
          setCardData(responseData.loyaltyCard);
        } else if (typeof responseData.loyaltyCard === 'object') {
          // If only one card is returned, convert it to an array
          setCardData([responseData.loyaltyCard]);
        } else {
          throw new Error('Invalid data format');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div>
      {cardData.map((card, index) => (
           <Col   key={index}>
        <div className='px-4'>
          <div
            className='p-3'
            style={{ boxShadow: '1px 2px 11.1px 0px #0000001A' }}
          >
            <div className='d-flex justify-content-between align-items-center '>
              <div>
                <p
                  style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    color: '#717171',
                  }}
                >
                  {' '}
                  Current Offer
                </p>
              </div>
              <div>
                <img src='/Delete button.svg' alt='' />
              </div>
            </div>
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
                      boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                    }}
                    type='text'
                    placeholder={card.amount ? `$${card.amount}` : ''}
                    disabled
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
                    Points
                  </p>
                  <input
                    className='w-100 border-0 p-3'
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      borderRadius: '8px',
                      color: '#4C535F',
                      boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                    }}
                    type='text'
                    placeholder={card.points ? card.points.toString() : ''}
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        </Col>
      ))}
    </div>
  );
};

export default LoylityCard;
