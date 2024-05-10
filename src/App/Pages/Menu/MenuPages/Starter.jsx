import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarterCard from './StarterCard.jsx';
import { Row, Col } from 'react-bootstrap';
import { baseUrl } from "../../../Components/constants";

const Starter = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}/api/restaurant/getMenu`);
  //       console.log('Menu data:', response.data);
  //       setMenuItems(response.data.menu.items);
  //     } catch (error) {
  //       console.error('Error fetching menu:', error);
  //       setError(error.message); // Set error state with error message
  //     }
  //   };

  //   fetchMenu();
  // }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Retrieve the token from local storage
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
          throw new Error('Authentication token not found');
        }

        const response = await axios.get(
          '${baseUrl}/api/restaurant/getCategories',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setMenuData(response.data.menu.items);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p> // Display error message if there's an error
      ) : (
        <Row className='no-gutters'>
          {menuItems.map(item => (
            <Col lg={3} md={3} xl={3} key={item._id}>
              <StarterCard
                Image={item.image}
                price={item.price}
                Name={item.name}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Starter;
