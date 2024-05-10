import React from 'react';

const data = [
  {
    id: 1,
    name: 'Cheese Burger',
    quantity: 2,
    notes: 'without syrup',
    price: 18.1,
    imageUrl:
      'https://images.unsplash.com/photo-1675257163553-7b47b4680636?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Spring Salad',
    quantity: 2,
    notes: '',
    price: 22.8,
    imageUrl:
      'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'White Sauce Pasta',
    quantity: 2,
    notes: '',
    price: 22.8,
    imageUrl:
      'https://images.unsplash.com/photo-1626379907491-3bbea53919a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Fried Rice',
    quantity: 2,
    notes: '',
    price: 16.8,
    imageUrl:
      'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const SidePageCard = ( { item } ) =>
{
  return (
    <div>
      <div
        className='d-flex shadow rounded-4 p-2 mt-4 justify-content-between align-items-center'
        style={ { backgroundColor: '#FFFFFF' } }
      >
        <div className='d-flex justify-content-start align-items-start w-50'>
          <div
            style={ {
              width: '70px',
              height: '70px',
              borderRadius: '15px',
              overflow: 'hidden',
            } }
          >
            <img
              src={ item.imageUrl }
              alt=''
              className='w-100 h-100 object-cover'
            />
          </div>
          <div className='pt-4 ms-2' style={ { height: '70px' } }>
            <p
              className='ms-2 resfont'
              style={ { color: '#222222', fontWeight: '500' } }
            >
              { item.name }
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center w-25'>
          <p style={ { color: '#444444' } }>X{ item.quantity }</p>
          <p
            className='ms-0 ms-md-5 text-nowrap resfont'
            style={ { color: '#444444' } }
          >
            { item.notes }
          </p>
        </div>
        <div className='w-25 text-end resfont'>
          <p style={ { color: '#212121', fontWeight: '600' } }>
            ${ item.price.toFixed( 2 ) }
          </p>
        </div>
      </div>
    </div>
  );
};

const SidePageCardList = ( { data, discountAmount, totalAmount } ) =>
{
  return (
    <div>
      { data.map( item => (
        <SidePageCard key={ item.id } item={ item } />
      ) ) }
      <div className='d-flex justify-content-between align-items-center my-4'>
        <div className='d-flex flex-column justify-content-start align-items-start '>
          <div>
            <p
              style={ { color: '#717171', fontSize: '14px', fontWeight: '400' } }
            >
              Status:{ ' ' }
              <span
                style={ {
                  color: '#00BF63',
                  fontSize: '14px',
                  fontWeight: '500',
                } }
              >
                Confirmed
              </span>
            </p>
          </div>
          <div className='mt-2'>
            <p
              style={ { color: '#717171', fontSize: '14px', fontWeight: '400' } }
            >
              Preparation Time{ ' ' }
              <span
                style={ {
                  color: '#00BF63',
                  fontSize: '14px',
                  fontWeight: '500',
                } }
              >
                00h: 25m: 30s
              </span>
            </p>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-end align-items-end '>
          <div>
            <p style={ { color: '#717171' } }>
              Total{ ' ' }:
              <span style={ { color: '#222222', fontWeight: '500', fontSize: '18px' } }>
                ${ totalAmount }
              </span>
            </p>
          </div>
          <div className='mt-2'>
            <p style={ { color: '#717171' } }>
              discount{ ' ' }:
              <span style={ { color: '#717171', fontWeight: '400', fontSize: '18px' } }>
                ${ discountAmount }
              </span>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SidePageCardList;
