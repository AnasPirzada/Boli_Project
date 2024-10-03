import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from '../../../../const.js';
import Navbar from '../../../Components/Navbar.jsx';
import SideBar from '../../../Components/Sidebar.jsx';

export const index = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const restaurantId = localStorage.getItem('restaurantId');

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `${baseurl}api/restaurant/getCategoriesById/${restaurantId}`,
          config
        );
        console.log(response);

        setCategories(response.data.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // console.log("sss"+ categories[0]?.name)

  const [activeButton, setActiveButton] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [itemName, setItemName] = useState('');
  const [itemdescription, setItemdescription] = useState('');
  const [price, setPrice] = useState('');
  const [itemimg, setItemimg] = useState('');
  const [addons, setAddons] = useState([]);
  let fileInputRef;

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  // const handleButtonClick = buttonName => {
  //   setActiveButton(buttonName);
  // };
  const handleButtonClick = (categoryId, categoryName) => {
    setActiveButton(categoryName);
    setSelectedCategoryId(categoryId); // Set the selected category ID

    // Additional logic for handling button click goes here
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        // Call the API to upload the image
        uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async file => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${baseurl}/api/restaurant/uploadItemImage`,
        formData,
        config
      );

      console.log('Image uploaded successfully:', response.data);
      setItemimg(response.data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleItemNameChange = e => {
    const itemNameValue = e.target.value;
    console.log('Item Name:', itemNameValue);
    setItemName(itemNameValue);
  };
  const handleItemdescriptionChange = e => {
    const itemdescriptionValue = e.target.value;
    console.log('Item Name:', itemdescriptionValue);
    setItemdescription(itemdescriptionValue);
  };

  const handlePriceChange = e => {
    const priceValue = e.target.value;
    console.log('Price:', priceValue);
    setPrice(priceValue);
  };

  const handleAddNewAddon = () => {
    // Create a new addon object with empty name and price
    const newAddon = { name: '', price: '' };
    // Add the new addon to the addons array
    setAddons([...addons, newAddon]);
  };

  const handleAddonNameChange = (index, event) => {
    const newAddons = [...addons];
    newAddons[index].name = event.target.value;
    setAddons(newAddons);
  };

  const handleAddonPriceChange = (index, event) => {
    const newAddons = [...addons];
    newAddons[index].price = event.target.value;
    setAddons(newAddons);
  };

  const handleAddItem = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }

      const newItem = {
        name: itemName,
        description: itemdescription,
        price: price,
        category: selectedCategoryId,
        addOns: addons,
        image: itemimg,
      };
      console.log(newItem);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${baseurl}/api/restaurant/addItem`,
        newItem,
        config
      );

      console.log('Item added successfully:', response.data);

      // Clear the form fields after successful addition
      setItemName('');
      setPrice('');

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
    } catch (error) {
      console.error('Error adding item:', error);
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

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

      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0 shadow '
            style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
          >
            <SideBar activetabe='Menu' />
          </Col>
          <Col
            md={10}
            xs={10}
            className='custom-scrollbar'
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar />
            </Row>
            <Row className='mt-4'>
              <div className='m-2 p-3 shadow rounded-3 '>
                <div>
                  <p
                    style={{
                      color: '#00BF63',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    Add New Item
                  </p>
                </div>
                <div className='mt-5'>
                  <p
                    style={{
                      color: '#4C535F',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    Choose Category
                  </p>
                </div>
                <div>
                  <Row className='my-4'>
                    {categories.map(category => (
                      <div
                        className='col-lg-2 col-md-3 col-xs-6'
                        key={category.id}
                      >
                        <button
                          className='border-0 shadow w-100 mt-3'
                          style={{
                            padding: '10px 30px',
                            borderRadius: '8px',
                            color:
                              activeButton === category.name
                                ? '#FFFFFF'
                                : '#717171',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor:
                              activeButton === category.name
                                ? '#00BF63'
                                : '#FFFFFF',
                          }}
                          onClick={() =>
                            handleButtonClick(category._id, category.name)
                          }
                        >
                          {category.name.toUpperCase()}
                        </button>
                      </div>
                    ))}

                    <Col lg={4} md={3} xs={6}>
                      <Link to='/AddNewCategory'>
                        <button
                          className=' shadow w-100 mt-3'
                          style={{
                            padding: '10px 30px',
                            borderRadius: '8px',
                            border: '1px solid #00BF63',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#00BF6314',
                            color: '#00BF63',
                            boxShadow:
                              '2px 4px 17.600000381469727px 0px #0000002B',
                          }}
                          onClick={() => handleButtonClick('NewCategory')}
                        >
                          Add New Category
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <Col lg={4}>
                    <div className='d-flex flex-column justify-content-start align-items-start '>
                      <p
                        className='mb-3'
                        style={{
                          fontSize: '16px',
                          fontWeight: '500',
                          color: '#4C535F',
                        }}
                      >
                        Upload image of Item
                      </p>

                      <div
                        className='w-100 border-0 p-2 d-flex justify-content-center align-items-center'
                        style={{
                          backgroundColor: '#FFFFFF',
                          boxShadow:
                            '1px 2px 11.100000381469727px 0px #0000001A',
                          fontSize: '14px',
                          borderRadius: '8px',
                          fontWeight: '500',
                          color: '#B5B5B5',
                        }}
                      >
                        <input
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange}
                          style={{ display: 'none' }}
                          ref={input => (fileInputRef = input)}
                        />
                        {selectedImage ? (
                          <>
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
                          </>
                        ) : (
                          <>
                            <img
                              src='/gallery-add.svg'
                              alt='Upload QR'
                              className='my-5'
                              onClick={() => fileInputRef.click()}
                              style={{ cursor: 'pointer' }}
                            />
                            <p
                              className=' ms-2 pt-1'
                              style={{
                                color: '#4C535F',
                                fontSize: '12px',
                                fontWeight: '500',
                              }}
                            >
                              Upload photo
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <p
                      className='mb-3'
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#4C535F',
                      }}
                    >
                      Item name
                    </p>
                    <input
                      className='w-100 border-0 p-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                        fontSize: '14px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        color: '#B5B5B5',
                      }}
                      type='text'
                      placeholder='Please enter your item name'
                      value={itemName}
                      onChange={handleItemNameChange}
                    />
                  </Col>{' '}
                  <Col lg={4}>
                    <p
                      className='mb-3'
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#4C535F',
                      }}
                    >
                      Description
                    </p>
                    <input
                      className='w-100 border-0 p-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                        fontSize: '14px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        color: '#B5B5B5',
                      }}
                      type='text'
                      placeholder='Please enter your item description'
                      value={itemdescription}
                      onChange={handleItemdescriptionChange}
                    />
                  </Col>
                  <Col lg={4}>
                    <p
                      className='mb-3'
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#4C535F',
                      }}
                    >
                      Price
                    </p>
                    <input
                      type='number'
                      className='w-100 border-0 p-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
                        fontSize: '14px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        color: '#B5B5B5',
                      }}
                      placeholder='Please enter your Price'
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </Col>
                </Row>

                <Row className='my-4'>
                  <Col lg={4}>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <div
                        className='d-flex justify-content-center align-items-center'
                        onClick={toggleActive} // Toggle active state when clicked
                        style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
                      >
                        <img
                          src={
                            isActive
                              ? '/activeicon.svg'
                              : '/not active icon.svg'
                          }
                          alt=''
                        />{' '}
                        {/* Conditional rendering of the icon */}
                        <p
                          className='ms-2'
                          style={{
                            color: '#A6A6A6',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          Choose what you want to add
                        </p>
                      </div>
                      <div
                        className='d-flex justify-content-center align-items-center mt-4'
                        onClick={toggleActive} // Toggle active state when clicked
                        style={{ cursor: 'pointer' }} // Add cursor pointer to indicate it's clickable
                      >
                        <img
                          src={
                            isActive
                              ? '/not active icon.svg'
                              : '/activeicon.svg'
                          }
                          alt=''
                        />{' '}
                        {/* Conditional rendering of the icon */}
                        <p
                          className='ms-2'
                          style={{
                            color: '#A6A6A6',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          Add Ons
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <p
                      className='ms-2'
                      style={{
                        color: '#4C535F',
                        fontSize: '16px',
                        fontWeight: '600',
                      }}
                    >
                      Choose items to add
                    </p>

                    {addons.map((addon, index) => (
                      <div
                        className='w-full mt-3 d-flex justify-content-between align-items-center'
                        key={index}
                      >
                        <div>
                          <input
                            type='text'
                            className=' border-0 p-3'
                            placeholder='Addon name'
                            value={addon.name}
                            style={{
                              backgroundColor: '#FFFFFF',
                              boxShadow:
                                '1px 2px 11.100000381469727px 0px #0000001A',
                              fontSize: '14px',
                              borderRadius: '8px',
                              fontWeight: '500',
                              color: '#B5B5B5',
                            }}
                            onChange={event =>
                              handleAddonNameChange(index, event)
                            }
                          />
                        </div>
                        <div>
                          <input
                            type='number'
                            min='0'
                            max='100000'
                            step='1'
                            placeholder='Price'
                            className=' border-0 p-3 ms-2'
                            value={addon.price}
                            onChange={event =>
                              handleAddonPriceChange(index, event)
                            }
                            style={{
                              backgroundColor: '#FFFFFF',
                              boxShadow:
                                '1px 2px 11.100000381469727px 0px #0000001A',
                              fontSize: '14px',
                              borderRadius: '8px',
                              fontWeight: '500',
                              color: '#B5B5B5',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <div>
                      <button
                        type='button'
                        className='mt-2 border-0'
                        style={{
                          color: '#FFFFFF',
                          backgroundColor: '#00BF63',
                          padding: '11px 20px 11px 20px',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                        onClick={handleAddNewAddon}
                      >
                        {' '}
                        Add new
                      </button>
                    </div>
                  </Col>
                </Row>

                <Row className='my-4'>
                  <Col lg={8} md={8} xs={12}></Col>
                  <Col lg={2} md={2} xs={6}>
                    <button
                      className='border-0 bg-transparent '
                      style={{
                        color: '#444444',
                        fontSize: '16px',
                        fontWeight: '500',
                        backgroundColor: '#00BF63',
                        padding: '11px 20px 11px 20px',
                        borderRadius: '8px',
                      }}
                    >
                      Cancel
                    </button>
                  </Col>
                  <Col lg={2} md={2} xs={6}>
                    <button
                      className='border-0 '
                      style={{
                        color: '#FFFFFF',
                        backgroundColor: '#00BF63',
                        padding: '11px 20px 11px 20px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                      onClick={handleAddItem}
                    >
                      Add Item
                    </button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
