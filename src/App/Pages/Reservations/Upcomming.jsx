import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../Components/constants.jsx';

// Helper function to format the date
const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB'); // Formats to DD/MM/YYYY
};

// Helper function to format the time (HH:mm) to 12-hour AM/PM format
const formatTime = timeString => {
  const [hour, minute] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hour, 10));
  date.setMinutes(parseInt(minute, 10));
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
};

export const Upcoming = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const restaurantId = localStorage.getItem('restaurantId');
        console.log(restaurantId);

        if (!token) {
          throw new Error('Token not found');
        }

        const response = await fetch(
          `${baseUrl}api/restaurant/getReservations/?status=upcoming`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              id: restaurantId,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 401) {
          throw new Error('Unauthorized. Please check your API token.');
        } else if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);

        setData(jsonData.data);
      } catch (error) {
        console.error('API Error:', error.message); // Log the error to the console
        setError('Failed to fetch data. Please try again later.'); // Set the error state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error); // Log the error to the console
    return <div>Error: {error}</div>; // Display the error in the UI
  }

  const renderReservations = () => {
    const reservationsByDate = Object.keys(data).sort(); // Sort the dates in ascending order
    let entryCount = 1;

    return reservationsByDate.map(dateKey => {
      const formattedDate = formatDate(dateKey);
      return (
        <div key={dateKey} className='px-4'>
          <h3
            className='mt-3'
            style={{ color: '#4C535F', fontSize: '16px', fontWeight: 'bold' }}
          >
            {formattedDate} {/* Display formatted date */}
          </h3>

          {data[dateKey].map((item, index) => (
            <div
              key={item._id}
              className='mt-3 shadow rounded-4 p-2 d-flex justify-content-between align-items-center'
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
                {entryCount++}. {/* Display entry number */}
              </p>
              <p
                style={{
                  color: '#444444',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                {item.customer?.name}
              </p>
              <p
                style={{
                  color: '#444444',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                {formatDate(item.date)}
              </p>
              <p
                style={{
                  color: '#444444',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                {item.tableFor}
              </p>
              <p
                style={{
                  color: '#444444',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                {formatTime(item.time)}
              </p>
            </div>
          ))}
        </div>
      );
    });
  };

  return <div>{renderReservations()}</div>;
};

export default Upcoming;
