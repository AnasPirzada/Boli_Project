import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar.jsx';
import SideBar from '../../Components/Sidebar.jsx';
import Delivered from './OrderTabbarPages/Delivered.jsx';
import New from './OrderTabbarPages/New.jsx';
import Process from './OrderTabbarPages/Process.jsx';
import SideContentForDelivered from './SidePageForDelivered.jsx';
import SideContentForNew from './SidePageForNew.jsx';
import SideContentForProcess from './SidePageForProcess.jsx';
const Index = () =>
{
  const [ activeTab, setActiveTab ] = useState( 'new' );
  const [ selectedCard, setSelectedCard ] = useState( 1 );

  const handleTabClick = tab =>
  {
    setActiveTab( tab );
  };

  const handleSelectCard = cardId =>
  {
    setSelectedCard( cardId );
  };


  const cardData = [
    {
      id: 1,
      discountAmount: 40.0,
      totalAmount: 548,
      data: [
        {
          name: 'Cheese Burger',
          quantity: 2,
          notes: 'without syrup',
          price: 18.1,
          imageUrl: 'public/Cheese Burger .png',
        },
        {
          name: 'Spring Salad',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/Spring Salad.png',

        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/White Sauce Pasta.png',
        }
      ]
    },
    {
      id: 2,
      discountAmount: 50.0,
      totalAmount: 600,
      data: [
        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl: '/Fried Rice.png',
        },

        {
          imageUrl: '/Spring Salad.png',
          name: 'Spring Salad 3',
          price: 20.0,
          notes: 'with dressing',
          quantity: 3
        }
      ]
    },
    {
      id: 3,
      discountAmount: 40.0,
      totalAmount: 500,

      data: [
        {
          imageUrl: '/Spring Salad.png',
          name: 'Spring Salad',
          price: 22.8,
          notes: 'without syrup',
          quantity: 2

        },
        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl: '/Fried Rice.png',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/White Sauce Pasta.png',
        }
      ]
    },
    {
      id: 4,
      discountAmount: 30.0,
      totalAmount: 400,
      data: [
        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl: '/Fried Rice.png',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/White Sauce Pasta.png',
        }
      ]
    },
    {
      id: 5,
      discountAmount: 20.0,
      totalAmount: 300,
      data: [
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/White Sauce Pasta.png',
        }
      ]
    },
    {
      id: 6,
      discountAmount: 10.0,
      totalAmount: 400,
      data: [
        {
          name: 'Cheese Burger',
          quantity: 2,
          notes: 'without syrup',
          price: 18.1,
          imageUrl: 'public/Cheese Burger .png',
        },
        {
          name: 'Spring Salad',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl: '/Spring Salad.png',

        },
      ]
    },
  ];


  const ProcesscardData = [
    {
      id: 1,
      discountAmount: 40.0,
      totalAmount: 548,
      data: [
        {
          name: 'Cheese Burger',
          quantity: 2,
          notes: 'without syrup',
          price: 18.1,
          imageUrl:
            'https://images.unsplash.com/photo-1675257163553-7b47b4680636?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        },
        {
          name: 'Spring Salad',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },
    {
      id: 2,
      discountAmount: 50.0,
      totalAmount: 580,
      data: [

        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl:
            'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },
    {
      id: 3,
      discountAmount: 50.0,
      totalAmount: 580,
      data: [

        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl:
            'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },
    {
      id: 4,
      discountAmount: 50.0,
      totalAmount: 580,
      data: [

        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl:
            'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },
    {
      id: 5,
      discountAmount: 50.0,
      totalAmount: 580,
      data: [

        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl:
            'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },
    {
      id: 6,
      discountAmount: 6846.0,
      totalAmount: 32,
      data: [

        {
          name: 'Fried Rice',
          quantity: 2,
          notes: '',
          price: 16.8,
          imageUrl:
            'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          name: 'White Sauce Pasta',
          quantity: 2,
          notes: '',
          price: 22.8,
          imageUrl:
            'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
      ]
    },

  ];
  const DeliveredcardData = [
    {
      id: 1,
      TotalAmount: 548,
      TableNo: 1,
      OrderNumber: '010104',
      DeliveredItems: [
        { id: 1, name: 'Mixed Ice Cream in Sundae Cup', price: '$12' },
        { id: 2, name: 'Chocolate Brownie', price: '$8' },
        { id: 3, name: 'Vanilla Milkshake', price: '$6' }
      ]
    },
    {
      id: 2,
      TotalAmount: 548,
      OrderNumber: '010105',
      DeliveredItems: [
        { id: 4, name: 'Chocolate Ice Cream Cone', price: '$5' },
        { id: 5, name: 'Strawberry Cheesecake', price: '$10' }
      ]
    },
    {
      id: 3,
      TotalAmount: 548,
      OrderNumber: '010106',
      DeliveredItems: [
        { id: 6, name: 'Caramel Sundae', price: '$7' },
        { id: 7, name: 'Banana Split', price: '$9' }
      ]
    },
    {
      id: 4,
      TotalAmount: 548,
      OrderNumber: '010107',
      DeliveredItems: [
        { id: 8, name: 'Pistachio Ice Cream Cone', price: '$5' },
        { id: 9, name: 'Fudge Brownie Sundae', price: '$8' }
      ]
    },
    {
      id: 5,
      TotalAmount: 548,
      OrderNumber: '010108',
      DeliveredItems: [
        { id: 10, name: 'Mint Chocolate Chip Ice Cream', price: '$6' },
        { id: 11, name: 'Cookies and Cream Milkshake', price: '$7' }
      ]
    },
    {
      id: 6,
      TotalAmount: 548,
      OrderNumber: '010109',
      DeliveredItems: [
        { id: 12, name: 'Butterscotch Sundae', price: '$7' },
        { id: 13, name: 'Double Chocolate Chip Cookie', price: '$3' }
      ]
    }
  ];





  return (
    <Container fluid className='h-100'>
      <Row>
        <Col
          xs={ 2 }
          md={ 2 }
          className='text-center p-0 shadow '
          style={ {
            backgroundColor: '#FFFFFF',
            height: '100vh',
            overflowY: 'hidden',
          } }
        >
          <SideBar activetabe='Orders' />
        </Col>
        <Col
          md={ 10 }
          xs={ 10 }
          className='custom-scrollbar'
          style={ { height: '100vh', overflowY: 'auto' } }
        >
          <Row>
            <Navbar />
          </Row>
          <Row
            className='my-0 my-md-4 m-0 m-md-2 shadow p-0 p-md-2'
            style={ { backgroundColor: '#FFFFFF' } }
          >
            <Col md={ 4 } xs={ 12 } lg={ 4 } className='my-2 '>
              <Row>
                <Col lg={ 4 } md={ 4 } xs={ 6 }>
                  <button
                    className={ `border-0 w-100  shadow rounded-3 px-3 p-2  ${ activeTab === 'new' ? 'buttonbg' : ''
                      }` }
                    style={ {
                      backgroundColor:
                        activeTab === 'new' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'new' ? '#FFFFFF' : '#222222',
                    } }
                    onClick={ () => handleTabClick( 'new' ) }
                  >
                    New
                  </button>
                </Col>
                <Col lg={ 4 } md={ 4 } xs={ 6 }>
                  <button
                    className={ `border-0 w-100 px-2 shadow rounded-3 p-2  ${ activeTab === 'inProcess' ? 'buttonbg' : ''
                      }` }
                    style={ {
                      backgroundColor:
                        activeTab === 'inProcess' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'inProcess' ? '#FFFFFF' : '#222222',
                    } }
                    onClick={ () => handleTabClick( 'inProcess' ) }
                  >
                    In Process
                  </button>
                </Col>
                <Col lg={ 4 } md={ 4 } xs={ 12 }>
                  <button
                    className={ `border-0 w-100 mt-3 mt-md-0 shadow rounded-3 px-3 p-2  ${ activeTab === 'delivered' ? 'buttonbg' : ''
                      }` }
                    style={ {
                      backgroundColor:
                        activeTab === 'delivered' ? '#00BF63' : '#FFFFFF',
                      color: activeTab === 'delivered' ? '#FFFFFF' : '#222222',
                    } }
                    onClick={ () => handleTabClick( 'delivered' ) }
                  >
                    Delivered
                  </button>
                </Col>
              </Row>

              <div>
                { activeTab === 'new' && (
                  <div>
                    <New onSelectCard={ handleSelectCard } />
                  </div>
                ) }
                { activeTab === 'inProcess' && (
                  <div>
                    <Process onClickedCard={ handleSelectCard } />
                  </div>
                ) }
                { activeTab === 'delivered' && (
                  <div>
                    { ' ' }
                    <Delivered onClickCard={ handleSelectCard } />
                  </div>
                ) }
              </div>
            </Col>
            <Col md={ 8 } xs={ 12 } lg={ 8 }>
              { activeTab === 'new' && (
                <div>
                  <SideContentForNew
                    tableNumber={ `Table No. ${ selectedCard }` }
                    discountAmount={ cardData.find( ( card ) => card.id === selectedCard )?.discountAmount }
                    totalAmount={ cardData.find( ( card ) => card.id === selectedCard )?.totalAmount }
                    data={ cardData.find( ( card ) => card.id === selectedCard )?.data }
                  />

                </div>
              ) }

              { activeTab === 'inProcess' && (
                <div>
                  <SideContentForProcess
                    tableNumber={ `Table No. ${ selectedCard }` }

                    discountAmount={ ProcesscardData.find( ( card ) => card.id === selectedCard )?.discountAmount }
                    totalAmount={ ProcesscardData.find( ( card ) => card.id === selectedCard )?.totalAmount }
                    data={ ProcesscardData.find( ( card ) => card.id === selectedCard )?.data }
                  />
                </div>
              ) }
              { activeTab === 'delivered' && (
                <div>
                  { ' ' }
                  <SideContentForDelivered
                    TableNo={ `Table No. ${ selectedCard }` }
                    OrderNumber={ DeliveredcardData.find( ( card ) => card.id === selectedCard )?.OrderNumber }
                    TotalAmount={ DeliveredcardData.find( ( card ) => card.id === selectedCard )?.TotalAmount }
                    DeliveredItems={ DeliveredcardData.find( ( card ) => card.id === selectedCard )?.DeliveredItems }
                  />
                </div>
              ) }
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
