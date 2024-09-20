import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { baseUrl } from '../../Components/constants.jsx';
import './table.css';

const FoodReservations = () => {
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
          `${baseUrl}/api/restaurant/foodOrderHistory`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
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
        setData(jsonData.orderHistory || []); // Ensure it's an array
      } catch (error) {
        console.error('API Error:', error.message);
        setError('Failed to fetch data. Please try again later.');
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
    console.log(error);
    return <div>Error: {error}</div>;
  }

  return (
    <div className='px-5 my-4'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>Table no</th>
            <th className='tablehead text-nowrap'>Order no</th>
            <th className='tablehead'>Name</th>
            <th className='tablehead'>Email</th>
            <th className='tablehead'>Bill</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='tabledata'>{val.tableNumber}</td>
              <td className='tabledata'>{val.orderNumber}</td>
              <td className='tabledata'>{val.customerName}</td>
              <td className='tabledata'>{val.customerEmail}</td>
              <td className='tabledata'>{val.bill}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FoodReservations;
