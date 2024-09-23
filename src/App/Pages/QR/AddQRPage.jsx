import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../Components/constants.jsx';

export const AddQRPage = () => {
  const [textData, setTextData] = useState({
    tableno: '',
    image: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setTextData({ ...textData, image: file });
    }
  };

  let fileInputRef;
  // const handleImageChange = e => {
  //   const file = e.target.files[0];
  // };

  const handleDoneClick = async () => {
    try {
      const formData = new FormData();

      // Custom validation: Check if the input value is empty or contains non-numeric characters
      const tableNumber = textData.tableno.trim(); // Remove leading/trailing spaces
      if (!/^\d+$/.test(tableNumber)) {
        toast.error('Table number is not a valid number');
        return;
      }

      formData.append('tableNumber', tableNumber);
      formData.append('qrCode', textData.image);

      const token = localStorage.getItem('token');

      const response = await axios.post(
        `${baseUrl}/api/restaurant/addQRCode`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);

      toast.success(response.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.log('last', response.data);
    } catch (error) {
      toast.error(error.response.data.errors.msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      // handleApiError(error);
    }
  };

  // const handleApiError = error => {
  //   if (error.response) {
  //     console.error('API Error Status:', error.response.status);
  //     console.error('API Error Data:', error.response.data);
  //   } else if (error.request) {
  //     console.error('No response received:', error.request);
  //   } else {
  //     console.error('Error setting up the request:', error.message);
  //   }
  // };

  // let fileInputRef;

  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
      <div className='m-2 p-3 shadow rounded-3'>
        <div className='my-3'>
          <p
            style={{
              color: '#00BF63',
              fontSize: '22px',
              fontWeight: '600',
            }}
          >
            AddQR
          </p>
        </div>
        <Row>
          <Col lg={3}>
            <div
              className='d-flex justify-content-center align-items-center'
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0.66px 1.33px 7.37px 0px rgba(0, 0, 0, 0.1)',
                borderRadius: '5.31px',
              }}
            >
              <p
                className='ps-2 my-0 text-nowrap '
                style={{
                  color: '#4C535F',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Table No.
              </p>
              <input
                onChange={e =>
                  setTextData({ ...textData, tableno: e.target.value })
                }
                required
                className='border-0 py-2 ms-4'
                style={{
                  color: '#4C535F',
                  fontSize: '12px',
                  fontWeight: 500,
                  boxShadow: '1px 2px 11.1px 0px rgba(0, 0, 0, 0.11)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                }}
                placeholder='#0011'
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <p
              className='mt-4'
              style={{
                color: '#4C535F',
                fontSize: '10.62px',
                fontWeight: '400',
              }}
            >
              Assign QR
            </p>

            <div
              className='text-center d-flex align-items-center justify-content-center'
              style={{
                borderRadius: '5.31px',
                boxShadow:
                  ' 0.6638888716697693px 1.3277777433395386px 7.369166851043701px 0px #0000001A',
                width: '300px',
                height: '300px',
              }}
            >
              {/* Input for selecting image */}
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                style={{ display: 'none' }}
                ref={input => (fileInputRef = input)}
              />
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt='Selected'
                  className='my-5'
                  onClick={() => fileInputRef.click()}
                  style={{
                    cursor: 'pointer',
                    width: '300px',
                    height: '300px',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <img
                  src='/uploadQR.png'
                  alt='Upload QR'
                  className='my-5'
                  onClick={() => fileInputRef.click()}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </div>
          </Col>
        </Row>

        <Row className='mt-3 mb-5'>
          <Col lg={2}>
            <button
              className='w-100'
              style={{
                backgroundColor: '#FFFFFF',
                color: '#00BF63',
                borderRadius: '8px',
                padding: '11px 30px 11px 30px',
                fontSize: '16px',
                fontWeight: '500',
                border: '1px solid #00BF63',
              }}
            >
              Cancel
            </button>
          </Col>
          <Col lg={2}>
            <button
              onClick={handleDoneClick}
              className='border-0 mt-md-0 mt-3 w-100'
              style={{
                padding: '11px 30px 11px 30px',
                backgroundColor: '#00BF63',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Done
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default AddQRPage;
