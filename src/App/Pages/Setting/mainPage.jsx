import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { baseurl } from '../../../const.js';

const MainPage = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    accountNumber: '',
    designation: 'Owner',
    restaurantDescription: '',
    restaurantImages: [],
    profilePicture: '',
  });

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [uploadError, setUploadError] = useState(null); // Error state for image upload

  const token = localStorage.getItem('token'); // Get token from local storage

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${baseurl}api/restaurant/getProfile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfileData({
          name: response.data.name || '',
          email: response.data.email || '',
          phoneNumber: response.data.phoneNumber || '',
          accountNumber: response.data.accountNumber || '',
          designation: response.data.designation || 'Owner',
          restaurantDescription: response.data.restaurantDescription || '',
          restaurantImages: response.data.restaurantImages || [],
          profilePicture: response.data.profilePicture || '',
        });
        setError(null);
        console.log(response);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  // Handle file changes for both profile and restaurant images
  const handleFileChange = async e => {
    const files = Array.from(e.target.files);
    setUploadError(null); // Reset the upload error state

    if (e.target.id === 'profileImageInput' && files[0]) {
      try {
        const formData = new FormData();
        formData.append('image', files[0]);

        // Upload profile picture
        const response = await axios.post(
          `${baseurl}api/restaurant/uploadRestaurantImage`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Update profileData with the uploaded profile picture URL
        setProfileData(prevData => ({
          ...prevData,
          profilePicture: response.data.imageUrl, // Assuming the API returns the image URL
        }));
      } catch (error) {
        console.error('Error uploading profile image:', error);
        setUploadError('Failed to upload profile image.');
      }
    }

    if (e.target.id === 'restaurantImagesInput') {
      // Upload multiple restaurant images
      const uploadedImages = [];
      for (const file of files) {
        try {
          const formData = new FormData();
          formData.append('image', file);

          const response = await axios.post(
            `${baseurl}api/restaurant/uploadRestaurantImage`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          uploadedImages.push(response.data.imageUrl); // Assuming the API returns the image URL
        } catch (error) {
          console.error('Error uploading restaurant image:', error);
          setUploadError('Failed to upload some restaurant images.');
        }
      }

      // Update restaurant images in state
      setProfileData(prevData => ({
        ...prevData,
        restaurantImages: [...prevData.restaurantImages, ...uploadedImages],
      }));
    }
  };
  // Handle deleting a restaurant image
  const handleDeleteImage = index => {
    setProfileData(prevData => {
      const updatedImages = [...prevData.restaurantImages];
      updatedImages.splice(index, 1); // Remove the image from the array
      return {
        ...prevData,
        restaurantImages: updatedImages,
      };
    });
  };

  // Handle input changes for text fields
  const handleInputChange = e => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle profile update
  const handleUpdateProfile = async () => {
    try {
      const payload = {
        ...profileData,
      };

      const response = await axios.post(
        `${baseurl}api/restaurant/updateRestaurantOwner`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Profile updated:', response.data);
      // Optionally, show a success message or redirect
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile.');
    }
  };
  // Display loading state
  if (loading) {
    return (
      <Container className='m-2 mb-4 shadow rounded-3'>
        <div className='p-4'>
          <p
            className='textColor'
            style={{ fontSize: '22px', fontWeight: '700' }}
          >
            Settings
          </p>
          <hr style={{ border: '2px solid #E0E4EC' }} />
          {/* Skeleton for Profile Picture */}
          <div className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Your Profile Picture
            </p>
            <div
              className='d-flex flex-column mt-2 justify-content-center align-items-center rounded-4'
              style={{
                boxShadow: '1px 2px 11px 0px #0000001A',
                backgroundColor: '#FFFFFF',
                width: '132px',
                height: '130px',
              }}
            >
              <div
                className='placeholder-image'
                style={{
                  width: '132px',
                  height: '130px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '8px',
                }}
              ></div>
            </div>
          </div>
          <hr style={{ border: '2px solid #E0E4EC' }} />
          {/* Skeleton for Form Fields */}
          <Row>
            <Col sm={12} md={6} className='mt-4'>
              <p
                style={{
                  color: '#4C535F',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Full name
              </p>
              <div
                className='placeholder-input'
                style={{
                  width: '100%',
                  height: '38px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  boxShadow: '1px 2px 11px 0px #0000001A',
                }}
              ></div>
            </Col>
            <Col sm={12} md={6} className='mt-4'>
              <p
                style={{
                  color: '#4C535F',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Email
              </p>
              <div
                className='placeholder-input'
                style={{
                  width: '100%',
                  height: '38px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  boxShadow: '1px 2px 11px 0px #0000001A',
                }}
              ></div>
            </Col>
          </Row>
          {/* Add more skeletons as needed */}
        </div>
      </Container>
    );
  }

  // Display error state
  if (error) {
    return (
      <Container className='m-2 mb-4 shadow rounded-3'>
        <div className='p-4'>
          <p
            className='textColor'
            style={{ fontSize: '22px', fontWeight: '700' }}
          >
            Settings
          </p>
          <hr style={{ border: '2px solid #E0E4EC' }} />
          <div className='mt-4'>
            <p style={{ color: 'red', fontSize: '16px', fontWeight: '500' }}>
              {error}
            </p>
          </div>
        </div>
      </Container>
    );
  }

  // Main Render
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
          className='d-flex flex-column mt-2 justify-content-center align-items-center rounded-4'
          style={{
            boxShadow: '1px 2px 11px 0px #0000001A',
            backgroundColor: '#FFFFFF',
            width: '132px',
            height: '130px',
          }}
        >
          <label htmlFor='profileImageInput'>
            <input
              type='file'
              id='profileImageInput'
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <img
              src={profileData.profilePicture || '/gallery-add.svg'}
              alt='Profile'
              role='button'
              style={{
                width: '132px',
                height: '130px',
                objectFit: 'cover',
                borderRadius: '8px',
              }} // Adjust preview size and add border radius
            />
          </label>
        </div>
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
              className='rounded-3 p-2  w-100 border-0'
              style={{
                backgroundColor: '#FFFFFF',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11px 0px #0000001A',
              }}
              placeholder='Please enter your full name'
              name='name'
              value={profileData.name}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p
              style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}
            >
              Email
            </p>
            <input
              type='email'
              className='rounded-3 p-2 w-100'
              style={{
                backgroundColor: '#FFFFFF',
                border: 'none',
                color: '#8D98AA',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: ' 1px 2px 11px 0px #0000001A',
              }}
              placeholder='Please enter your email'
              name='email'
              value={profileData.email}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
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
                boxShadow: ' 1px 2px 11px 0px #0000001A',
              }}
              placeholder='+1 | Please enter your phone number'
              name='phoneNumber'
              value={profileData.phoneNumber}
              onChange={handleInputChange}
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
                boxShadow: ' 1px 2px 11px 0px #0000001A',
              }}
              placeholder='Please enter Company’s account number'
              name='accountNumber'
              value={profileData.accountNumber}
              onChange={handleInputChange}
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
        </Row>
        <Row>
          <Col lg={6}>
            <Row className='mt-3'>
              {/* Mapping over the restaurant images to display each image */}
              {profileData.restaurantImages.map((url, index) => (
                <Col
                  lg={4}
                  className='ms-3'
                  key={index}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '66px',
                    height: '66px',
                    borderRadius: '8px',
                    position: 'relative', // To position the delete icon properly
                  }}
                >
                  {/* Delete Icon */}
                  <span
                    onClick={() => handleDeleteImage(index)}
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                      padding: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src='/delicon.svg'
                      alt='Delete Icon'
                      style={{ width: '8px', height: '8px' }}
                    />
                  </span>
                </Col>
              ))}

              {/* Add New Image Button */}
              <Col lg={3}>
                <div
                  role='button'
                  className='d-flex justify-content-center align-items-center p-3'
                  style={{
                    width: '66px',
                    height: '66px',
                    borderRadius: '8px',
                    boxShadow: '1px 2px 11px 0px #0000001A',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <label htmlFor='restaurantImagesInput'>
                    <input
                      type='file'
                      id='restaurantImagesInput'
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      multiple
                    />
                    <img src='/gallery-add.svg' alt='Add New' role='button' />
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='mt-3 justify-content-end'>
          <Col lg={3} md={4} sm={6}>
            <button
              className='w-100 p-3 text-white'
              style={{
                backgroundColor: '#00B0FF',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
              }}
              onClick={handleUpdateProfile}
            >
              Done
            </button>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <button
              className='w-100 p-3 text-white'
              style={{
                backgroundColor: '#00B0FF',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
              }}
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MainPage;
