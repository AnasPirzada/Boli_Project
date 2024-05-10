import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='container'>
      <Row className='my-2 justify-content-between align-items-center'>
        <Col xs={12} md={5} className='d-flex rounded-5 ms-3 p-2 shadow'>
          <img src='/search.svg' alt='' />
          <input
            type='search'
            placeholder='Search here'
            className='w-100 border-0 ps-3'
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className='d-flex justify-content-end align-items-center'
        >
          <Link to='/Notification'>
            <div className='me-2'>
              <img src='/notification.svg' alt='' />
            </div>
          </Link>
          <div className='me-4'>
            <p style={{ color: '#444444' }}>Manager</p>
          </div>
          <div
            className='rounded-5 me-4'
            style={{
              width: '50px',
              height: '50px',
              overflow: 'hidden',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <img src='/user.png' alt='' />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
