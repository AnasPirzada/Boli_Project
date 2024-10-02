import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Placeholder, Row } from 'react-bootstrap';
import { TabList, Tabs } from 'react-re-super-tabs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../../Components/constants.jsx';

const MenuTabbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // Initially set to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Predefined category order
  const categoryOrder = ['Starter', 'Main', 'Dessert', 'Drink'];

  // Move fetchMenuData outside useEffect for reusability
  const fetchMenuData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await axios.get(`${baseUrl}/api/restaurant/getMenu`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response);

      if (response.data.message === 'Menu fetched successfully') {
        const menuItems = response.data.menu.items;
        const categorizedMenu = {};

        menuItems.forEach(item => {
          const category = item?.category ? item?.category?.name : 'All Items';
          if (!categorizedMenu[category]) {
            categorizedMenu[category] = [];
          }
          categorizedMenu[category].push(item);
        });

        // Set the first category with items as the active tab
        const firstCategoryWithItems = categoryOrder.find(
          category =>
            categorizedMenu[category] && categorizedMenu[category].length > 0
        );
        if (firstCategoryWithItems) {
          setActiveTab(firstCategoryWithItems);
        }

        setMenuData(categorizedMenu);
        setError(null);
      } else {
        throw new Error('Failed to fetch menu data');
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error fetching menu data: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch menu data when the component mounts
  useEffect(() => {
    fetchMenuData();
  }, []);

  const handleTabClick = category => {
    setActiveTab(category);
    console.log('Active Tab:', category);
  };

  const handleDelete = async itemId => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/restaurant/deleteItem/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.data.message === 'Item deleted successfully') {
        toast.success('Item deleted successfully');
        // Refetch the updated menu data after deletion
        await fetchMenuData();
        // Check if the active tab is now empty and display a message
        if (!menuData[activeTab] || menuData[activeTab].length === 0) {
          toast.info(`No menu added for this category (${activeTab})`);
        }
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete item');
      setError(error.message);
    }
  };

  return (
    <>
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
          pauseOnHover
          theme='light'
          transition='Bounce'
        />
        <Tabs activeTab={activeTab}>
          <TabList className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
            <TabList>
              {menuData &&
                // Display categories in specified order first, then any additional ones
                [
                  ...categoryOrder,
                  ...Object.keys(menuData).filter(
                    category => !categoryOrder.includes(category)
                  ),
                ].map(category => (
                  <button
                    key={category}
                    style={{
                      padding: '10px 20px',
                      cursor: 'pointer',
                      backgroundColor:
                        activeTab === category ? '#00BF63' : '#fff',
                      color: activeTab === category ? '#fff' : '#00BF63',
                      borderRadius: '10px',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: '500',
                      margin: '0 10px',
                      border: '1px solid #00BF63',
                      boxShadow: '0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => handleTabClick(category)}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
            </TabList>
            <TabList>
              <Link to='/Add'>
                <button
                  className='border-0 shadow '
                  style={{
                    padding: '10px 20px',
                    display: 'inline-block',
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    color: '#00BF63',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 25px',
                    boxShadow: '0px 2px 6.8px 0px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Add
                </button>
              </Link>
            </TabList>
          </TabList>
          <TabList>
            {loading ? (
              <Row className='mt-3'>
                {[...Array(4)].map((_, index) => (
                  <Col md={3} key={index}>
                    <Card className='bg-white shadow rounded-4 mt-4'>
                      <Placeholder
                        as={Card.Img}
                        variant='top'
                        className='w-100 h-[198px] rounded-[15px]'
                      />
                      <Card.Body>
                        <Placeholder as={Card.Title} animation='glow'>
                          <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation='glow'>
                          <Placeholder xs={8} /> <Placeholder xs={4} />
                        </Placeholder>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              menuData && (
                <Row key={activeTab} className='mt-3'>
                  {menuData[activeTab]?.length > 0 ? (
                    menuData[activeTab].map(item => (
                      <Col md={3} key={item._id}>
                        <div className='bg-white shadow rounded-4 mt-4'>
                          <div className='w-100 h-[198px]'>
                            <img
                              src={item.image}
                              alt=''
                              className='w-100 h-full object-cover rounded-[15px]'
                              style={{
                                backgroundPosition: 'center',
                                borderRadius: '15px 15px 15px 15px ',
                              }}
                            />
                          </div>

                          <div className='ms-2 py-2'>
                            <p
                              style={{
                                color: '#424242',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              <b> {item.name}</b>
                            </p>
                            <div className='d-flex  justify-content-between align-items-center'>
                              <p
                                style={{
                                  color: '#00BF63',
                                  fontSize: '18px',
                                  fontWeight: '600',
                                }}
                              >
                                $ {item.price}
                              </p>
                              <button
                                onClick={() => handleDelete(item._id)}
                                className='me-2 text-danger bg-transparent'
                                style={{
                                  fontSize: '18px',
                                  fontWeight: '600',
                                  border: 'none',
                                  borderBottom: '2px solid #E54C38',
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <p className='text-center'>
                      No menu added for this category
                    </p>
                  )}
                </Row>
              )
            )}
          </TabList>
        </Tabs>
      </div>
    </>
  );
};

export default MenuTabbar;
