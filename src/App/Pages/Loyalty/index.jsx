import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import LoylityCard from './LoylityCard.jsx';
import { Link } from 'react-router-dom';
export const index = () =>
{
  return (
    <div>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={ 2 }
            md={ 2 }
            className=' text-center p-0 shadow '
            style={ {
              backgroundColor: '#FFFFFF',
              height: '100vh',
            } }
          >
            <SideBar activetabe='Loyalty' />
          </Col>
          <Col
            md={ 10 }
            xs={ 10 }
            className='custom-scrollbar'
            style={ { height: '100vh', overflowY: 'auto' } }
          >
            <Row>
              <Navbar />
            </Row>
            <Row className='mt-4'>
              <div>
                <div>
                  <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
                    <div className='d-flex justify-content-between align-items-center '>
                      <div className='p-4 d-flex flex-column justify-content-start align-items-start '>
                        <div>
                          <p
                            className='textColor'
                            style={ { fontSize: '22px', fontWeight: '700' } }
                          >
                            Loyalty Card
                          </p>
                        </div>
                        <div>
                          <p
                            className='my-1'
                            style={ {
                              color: '#717171',
                              fontWeight: '400',
                              fontSize: '20px',
                            } }
                          >
                            Every dollar user spends on eligible purchases, they
                            will receive 100 points.
                          </p>
                        </div>
                      </div>
                      <div className='p-4'>
                        <Link to='/AddLoylity'>
                          <button
                            className='border-0 bg-transparent '
                            style={ {
                              color: '#00BF63',
                              boxShadow:
                                '2px 4px 17.600000381469727px 0px #0000002B',
                              padding: '10px 30px 10px 30px',
                              fontSize: '14px',
                              fontWeight: '500',
                              borderRadius: '8px',
                            } }
                          >
                            Add Item
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className='my-2'>
                      <Row className='no-gutters px-5'>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Cheese Burger .png'
                            points='300'
                            Name='Cheese Burger'
                          />
                        </Col>
                        {/* <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/White Sauce Pasta.png'
                            price='3.88'
                            Name='Toffe’s Cake'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Dancake.png'
                            price='3.88'
                            Name='Dancake'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Crispy Sandwitch .png'
                            price='3.88'
                            Name='Crispy Sandwitch'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Dancake.png'
                            price='3.88'
                            Name='Thai  Soup'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Cheese Burger .png'
                            points='300'
                            Name='Cheese Burger'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/White Sauce Pasta.png'
                            price='3.88'
                            Name='Toffe’s Cake'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Dancake.png'
                            price='3.88'
                            Name='Dancake'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Crispy Sandwitch .png'
                            price='3.88'
                            Name='Crispy Sandwitch'
                          />
                        </Col>
                        <Col lg={ 3 } md={ 3 } xl={ 3 }>
                          <LoylityCard
                            Image='/Dancake.png'
                            price='3.88'
                            Name='Thai  Soup'
                          />
                        </Col> */}
                      </Row>
                    </div>
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
