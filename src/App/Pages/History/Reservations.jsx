import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { baseUrl } from '../../Components/constants.jsx';
import './table.css';

// Helper function to format the date as DD/MM/YYYY
const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB'); // Formats to DD/MM/YYYY
};

// Helper function to format the time to 12-hour AM/PM format
const formatTime = timeString => {
  const [hour, minute] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hour, 10));
  date.setMinutes(parseInt(minute, 10));
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const Reservations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await fetch(
          `${baseUrl}/api/restaurant/resrevationHistory`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`, // Correct string interpolation
              'Content-Type': 'application/json',
            },
          }
        );

        // Check if the response is OK (status code 2xx)
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        // Check if the response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const jsonData = await response.json();
          setData(jsonData); // Set the data from the API response
        } else {
          throw new Error('Response is not JSON.');
        }
      } catch (error) {
        console.error('API Error:', error.message);
        setError(`Failed to fetch data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='px-5'>
        <Table responsive>
          <thead>
            <tr>
              <th className='tablehead'>No</th>
              {/* <th className='tablehead text-nowrap '>Profile Image</th> */}
              <th className='tablehead'>Name</th>
              <th className='tablehead'>Email</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td className='tabledata'>
                  <Placeholder as='div' animation='wave'>
                    <Placeholder xs={6} />
                  </Placeholder>
                </td>
                {/* <td className='tabledata'>
                  <Placeholder as='div' animation='wave'>
                    <Placeholder xs={6} />
                  </Placeholder>
                </td> */}
                <td className='tabledata'>
                  <Placeholder as='div' animation='wave'>
                    <Placeholder xs={6} />
                  </Placeholder>
                </td>
                <td className='tabledata'>
                  <Placeholder as='div' animation='wave'>
                    <Placeholder xs={6} />
                  </Placeholder>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='px-5 my-4'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>No</th>
            <th className='tablehead text-nowrap'>Name</th>
            <th className='tablehead'>Date</th>
            <th className='tablehead'>Table of</th>
            <th className='tablehead'>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='tabledata'>{val.no}</td>
              <td className='tabledata'>{val.customerName}</td>
              <td className='tabledata'>{formatDate(val.date)}</td>
              <td className='tabledata'>{val.tableOf}</td>
              <td className='tabledata'>{formatTime(val.time)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reservations;
