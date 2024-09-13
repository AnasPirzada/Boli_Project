import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import Registeredtable from './Registeredtable.jsx';

export const index = () => {
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
            <SideBar activetabe='Registered' />
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
                        Registered
                      </p>
                    </div>

                    <div>
                      <Registeredtable />
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
