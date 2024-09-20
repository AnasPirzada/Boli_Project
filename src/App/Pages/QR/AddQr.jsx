import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import AddQRPage from './AddQRPage.jsx';
const AddQR = () => {
  return (
    <div>
      <Container fluid className='h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow'
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='QR' />
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
              <AddQRPage />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddQR;
