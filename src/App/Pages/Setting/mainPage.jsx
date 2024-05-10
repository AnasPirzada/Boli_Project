import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const mainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = e => {
    setSelectedFile(e.target.files[0]);
    // You can perform additional actions here if needed, like uploading the file
  };
  const backgroundImageUrls = [
    'https://images.unsplash.com/photo-1555992457-b8fefdd09069?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <Container className='m-2 mb-4 shadow rounded-3'>
      <div className='p-4'>
        <p
          className='textColor'
          style={{ fontSize: '22px', fontWeight: '700' }}
        >
          Settings
        </p>

        <div className='mt-4'>
          <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>
            Your Profile Picture
          </p>
        </div>

        <div
          className='d-flex flex-column mt-2 justify-content-center align-items-center rounded-4 '
          style={{
            boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
            backgroundColor: '#FFFFFF',
            width: '132px',
            height: '130px',
          }}
        >
          <img src='/gallery-add.svg' alt='' />
          <p
            className='text-center pt-2'
            style={{ color: '#4C535F', fontSize: '15px', fontWeight: '500' }}
          >
            Upload your <br /> photo
          </p>
        </div>
        <br />
        <hr style={{ border: '2px solid #E0E4EC' }} />

        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Full name
            </p>
            <input
              type='text'
              className='rounded-3 p-2  w-100 border-0 '
              style={{
                backgroundColor: '#FFFFFF',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your full name'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Email
            </p>
            <input
              type='text'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your email'
            />
          </Col>
        </Row>
        {/* main vvddddd*/}
        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Username
            </p>
            <input
              type='text'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter your username'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Phone number
            </p>
            <input
              type='tel'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='+1 | Please enter your phone number'
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Account Number
            </p>
            <input
              type='tel'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
              }}
              placeholder='Please enter Company’s account number'
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Add Restaurant images
            </p>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Row className='mt-3'>
              {backgroundImageUrls.map((url, index) => (
                <Col
                  lg={4}
                  className='ms-3'
                  key={index}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    width: '66px', // Adjust width and height as needed
                    height: '66px',
                    borderRadius: '8px',
                  }}
                >
                  <div>
                    <Row>
                      <Col lg={6}></Col>
                      <Col
                        lg={3}
                        className='p-2 mt-1 text-end'
                        style={{
                          backgroundColor: '#E1D3C7',
                          width: '12px', // Adjust size of the shape as needed
                          height: '12px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src='/delicon.svg'
                          alt=''
                          style={{ width: '8px', height: '8px' }}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
              <Col lg={3}>
                <div
                  role='button'
                  className='d-flex justify-content-center align-items-center p-3'
                  style={{
                    width: '66px',
                    height: '66px',
                    borderRadius: '8px',
                    boxShadow: ' 1px 2px 11.100000381469727px 0px #0000001A',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <label htmlFor='fileInput'>
                    <input
                      type='file'
                      id='fileInput'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <img src='/gallery-add.svg' alt='' role='button' />
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              About Restaurant
            </p>
            <div
              className='p-2'
              style={{
                boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  color: '#8D98AA',
                  fontSize: '14px',
                  fontWeight: '400',
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Orci tortor turpis nunc
                amet nibh at. Sagittis dolor placerat cursus sollicitudin. Est
                sapien quam dictum enim et gravida. Nisl ante proin volutpat sem
                venenatis pulvinar. Ipsum auctor tortor vitae duis amet nisi.
                Etiam convallis nullam viverra pellentesque mi sed integer
                faucibus nunc.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg={9} md={9}></Col>
          <Col lg={3} xs={12} md={3}>
            <button
              className='rounded-3 w-100 p-2 border-0 text-white'
              style={{ backgroundColor: '#00BF63' }}
            >
              Done
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default mainPage;
