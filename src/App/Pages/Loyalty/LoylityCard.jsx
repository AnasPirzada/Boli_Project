import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Placeholder } from 'react-bootstrap';
import { baseUrl } from '../../Components/constants.jsx';

// const CardSkeleton = () => (
//   <Col>
//     <Card className='p-3' style={{ boxShadow: '1px 2px 11.1px 0px #0000001A' }}>
//       <Card.Body>
//         <div className='d-flex justify-content-between align-items-center mb-3'>
//           <div
//             className='skeleton skeleton-text'
//             style={{ width: '50%' }}
//           ></div>
//           <div
//             className='skeleton skeleton-icon'
//             style={{ width: '20%' }}
//           ></div>
//         </div>
//         <Row>
//           <Col lg={6}>
//             <div
//               className='skeleton skeleton-text'
//               style={{ height: '20px', width: '80%' }}
//             ></div>
//             <div
//               className='skeleton skeleton-input'
//               style={{ height: '40px', marginTop: '10px' }}
//             ></div>
//           </Col>
//           <Col lg={6}>
//             <div
//               className='skeleton skeleton-text'
//               style={{ height: '20px', width: '80%' }}
//             ></div>
//             <div
//               className='skeleton skeleton-input'
//               style={{ height: '40px', marginTop: '10px' }}
//             ></div>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   </Col>
// );

const CardSkeleton = () => (
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
            <Placeholder.Button variant='primary' xs={6} />
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

const LoylityCard = () => {
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
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
          setCardData([responseData.loyaltyCard]);
        } else {
          throw new Error('Invalid data format');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false); // Ensure loading is false even on error
      }
    };

    fetchCardData();
  }, []);

  return (
    <div>
      {loading
        ? // Show skeleton loader while loading
          Array(3)
            .fill(null)
            .map((_, index) => <CardSkeleton key={index} />) // Adjust number of skeletons based on your layout
        : cardData.map((card, index) => (
            <Col key={index}>
              <div className='px-4'>
                <div
                  className='p-3'
                  style={{ boxShadow: '1px 2px 11.1px 0px #0000001A' }}
                >
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <p
                        style={{
                          fontWeight: '400',
                          fontSize: '20px',
                          color: '#717171',
                        }}
                      >
                        Current Offer
                      </p>
                    </div>
                    <div>
                      <img src='/Delete button.svg' alt='' />
                    </div>
                  </div>
                  <Row className='px-0 md-px-2'>
                    <Col lg={6}>
                      <div className='my-2 d-flex flex-column justify-content-start align-items-start'>
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
                          placeholder={card.amount ? `$${card.amount}` : ''}
                          disabled
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className='my-2 d-flex flex-column justify-content-start align-items-start'>
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
                            boxShadow:
                              '1px 2px 11.100000381469727px 0px #0000001A',
                          }}
                          type='text'
                          placeholder={
                            card.points ? card.points.toString() : ''
                          }
                          disabled
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))}
      {error && <p className='text-danger'>{error}</p>}
    </div>
  );
};

export default LoylityCard;
