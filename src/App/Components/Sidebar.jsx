// import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = props => {
  const [activeTab, setActiveTab] = useState(props.activetabe);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className='AllTabbutn text-center '
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Link to='/'>
          <p
            className='text-start resfontlogo ms-0 ms-md-4  mt-3 textColor'
            style={{
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: '45px',
            }}
          >
            Boli
          </p>
        </Link>
        <Link to='/Orders'>
          <div
            className={`tab-container d-flex align-items-center text-center justify-content-start  sidebardiv ${
              activeTab === 'Orders' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Orders')}
          >
            <img src='/Orders.svg' alt='' class='activeicon' />

            <p className='mb-0 '>Orders</p>
          </div>
        </Link>
        <Link to='/Menu'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Menu' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Menu')}
          >
            {' '}
            <img src='/Menu.svg' alt='' />
            <p>Menu</p>
          </div>
        </Link>
        <Link to='/Reservations'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Reservations' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Reservations')}
          >
            {' '}
            <img src='/Reservations icon.svg' alt='' />
            <p>Reservations</p>
          </div>
        </Link>
        <Link to='/QR'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'QR' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('QR')}
          >
            {' '}
            <img src='/QR.svg' alt='' />
            <p>QR Codes</p>
          </div>
        </Link>
        <Link to='/Registered'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Registered' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Registered')}
          >
            {' '}
            <img src='/Profile.svg' alt='' />
            <p>Registered users</p>
          </div>
        </Link>
        <Link to='/Loyalty'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Loyalty' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Loyalty')}
          >
            {' '}
            <img src='/voucher discount.svg' alt='' />
            <p>Loyalty Card</p>
          </div>
        </Link>
        <Link to='/History'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'History' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('History')}
          >
            {' '}
            <img src='/Backup.svg' alt='' />
            <p>History</p>
          </div>
        </Link>
        {/* <Link to='/Stats'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Stats' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Stats')}
          >
            {' '}
            <img src='/Stats.svg' alt='' />
            <p>Stats</p>
          </div>
        </Link> */}
        <Link to='/Settings'>
          <div
            className={`tab-container d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Settings' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Settings')}
          >
            {' '}
            <img src='/Setting.svg' alt='' />
            <p>Settings</p>
          </div>
        </Link>

        <div
          class='d-flex mt-5  justify-content-center align-items-center shadow p-2 md:p-3 bottom-0  mx-auto my-auto rounded-3 '
          role='button'
          onClick={handleShow}
        >
          <img src='/logouticon.svg' alt='' />
          <p
            class='ms-0  fs-8 ms-md-2'
            style={{
              fontWeight: '400',
              color: '#00BF63',
            }}
          >
            Logout
          </p>
        </div>

        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            centered
            keyboard={false}
          >
            <div
              className='d-flex flex-column w-100 justify-content-center align-items-center '
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
              }}
            >
              <div className='d-flex mt-5 justify-content-center align-items-center '>
                <img src='/logout.svg' alt='' />
                <p
                  className='ms-3'
                  style={{
                    color: '#444444',
                    fontSize: '24px',
                    FontWeight: '500',
                  }}
                >
                  Sign Out
                </p>
              </div>
              <div className='my-4'>
                <p
                  style={{
                    color: '#222222',
                    fontSize: '16px',
                    FontWeight: '400',
                  }}
                >
                  Are you sure you want to Sign Out?
                </p>
              </div>
            </div>
            <Row className='px-4 mb-5 mt-3'>
              <Col lg={6} md={6} xs={12}>
                <button
                  className='w-100 p-3 px-4'
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #A0A0A0',
                    color: '#A0A0A0',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '18px',
                  }}
                  onClick={handleClose}
                >
                  No
                </button>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <button
                  className='w-100 p-3 mt-4 mt-md-0 px-4 border-0'
                  style={{
                    backgroundColor: '#F20707',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '18px',
                  }}
                >
                  Yes
                </button>
              </Col>
            </Row>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default SideBar;
