import React, { useState, useEffect } from 'react';
import { baseUrl } from '../../Components/constants.jsx';

export const Upcoming = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await fetch(
          `${baseUrl}/api/restaurant//getReservations?status=upcoming`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('API Error:', error.message); // Log the error to the console
        setError('Failed to fetch data. Please try again later.'); // Set the error state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error); // Log the error to the console
    return <div>Error: {error}</div>; // Display the error in the UI
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div className='ms-10'>No upcoming reservations found.</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='px-4'>
          <p
            className='mt-3'
            style={{
              color: '#4C535F',
              fontSize: '14px',
              fontWeight: '500',
              paddingLeft:'10px'
            }}
          >
            {item.maindate}
          </p>

          <div
            key={index}
            className='mt-3 shadow rounded-4 p-3 d-flex justify-content-between align-items-center '
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p
              className='mt-2'
              style={{
                color: '#444444',
                fontSize: '13px',
                fontWeight: '400',
              }}
            >
              01.
            </p>
            <p
              style={{
                color: '#444444',
                fontSize: '13px',
                fontWeight: '400',
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                color: '#444444',
                fontSize: '13px',
                fontWeight: '400',
              }}
            >
              {item.date}
            </p>
            <p
              style={{
                color: '#444444',
                fontSize: '13px',
                fontWeight: '400',
              }}
            >
              {item.table}
            </p>
            <p
              style={{
                color: '#444444',
                fontSize: '13px',
                fontWeight: '400',
              }}
            >
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
