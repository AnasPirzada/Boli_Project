import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const RegLocation = () => {
  const location = useLocation();
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token'); // Assumes 'token' is the key used to store the token
  };
  // Assume you have the token (replace this with your actual token)
  const token = getTokenFromLocalStorage();

  const handleSubmit = async () => {
    const restaurantName = location.state?.name || '';

    if (restaurantLocation.trim()) {
      const requestBody = {
        name: restaurantName,
        location: restaurantLocation,
      };
      console.log('requestBody', requestBody, token);
      try {
        const response = await fetch(
          'https://boli-app.azurewebsites.net/api/restaurant/addRestaurant',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // Add the Authorization header here
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          console.log('Restaurant added successfully!', response);
          // Optionally, navigate to another page or display a success message
        } else {
          console.error('Error adding restaurant', response);
        }
      } catch (error) {
        console.error('Request failed', error);
      }
    } else {
      alert('Please enter a valid location');
    }
  };

  return (
    <div
      className='ms-2 d-block d-md-flex  justify-content-around '
      style={{ height: '100vh' }}
    >
      <div className='  h-100'>
        <div>
          <h1
            className='mt-5 '
            style={{ color: '#00BF63', marginTop: '100px' }}
          >
            BOLI
          </h1>
        </div>
        <div className='d-flex flex-column justify-content-center h-75'>
          <div>
            <h2 className='fw-bold'>Location of your Restaurant</h2>
            <p style={{ color: '#667085' }}>
              Please enter the location of your restaurant.
            </p>
          </div>
          <div className='mt-4'>
            <input
              type='text'
              id='location'
              name='location'
              value={restaurantLocation}
              onChange={e => setRestaurantLocation(e.target.value)}
              className='border rounded-2 p-2  w-100 shadow'
              placeholder='9 W 53rd St, New York, NY 10019, USA.'
            />
          </div>

          <div className='mt-4'>
            <button
              type='button'
              onClick={handleSubmit}
              className='border rounded-2 p-2 w-100'
              style={{ background: '#00BF63', color: 'white' }}
            >
              Done
            </button>
          </div>
        </div>
      </div>

      <div className='object-contain  d-md-flex d-none  '>
        <img src='/Frame 3.png' className='w-100 h-auto' />
      </div>
    </div>
  );
};

export default RegLocation;
