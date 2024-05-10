import React from 'react';

const data = [
  {
    id: 1,
    name: 'Cheese Burger',
    quantity: 2,
    notes: 'without syrup',
    price: 18.1,
    imageUrl: '/Cheese Burger.png',
  },
  {
    id: 2,
    name: 'Spring Salad',
    quantity: 2,
    notes: '',
    price: 22.8,
    imageUrl: '/Spring Salad.png',
  },
  {
    id: 3,
    name: 'White Sauce Pasta',
    quantity: 2,
    notes: '',
    price: 22.8,
    imageUrl: '/White Sauce Pasta.png',
  },
  {
    id: 4,
    name: 'Fried Rice',
    quantity: 2,
    notes: '',
    price: 16.8,
    imageUrl: '/Fried Rice.png',
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

const ItemProcessCard = ( { data, discountAmount, totalAmount } ) =>
{
  return (
    <div>
      { data.map( item => (
        <SidePageCard key={ item.id } item={ item } />
      ) ) }
      <hr
        style={ {
          borderWidth: '0.5px 0px 0px 0px',
          borderStyle: 'solid',
          borderColor: '#A6A6A6',
        } }
      />
      <div className='d-flex justify-content-between align-items-center mt-3'>
        <p
          style={ {
            color: '#4C535F',
            fontSize: '14px',
            fontWeight: '500',
          } }
        >
          Discount Availed(400 points)
        </p>
        <span
          style={ {
            color: '#717171',
            fontWeight: '500',
            fontSize: '18px',
          } }
        >
          -${ discountAmount.toFixed( 2 ) }
        </span>
      </div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <p
          style={ {
            color: '#4C535F',
            fontSize: '14px',
            fontWeight: '500',
          } }
        >
          Total Amount{ ' ' }
        </p>
        <span
          style={ {
            color: '#222222',
            fontWeight: '500',
            fontSize: '18px',
          } }
        >
          ${ totalAmount.toFixed( 2 ) }
        </span>
      </div>

      <div className='d-flex my-3 justify-content-between align-items-center '>
        <div className='d-flex flex-column justify-content-start align-items-start'>
          <p
            style={ {
              color: '#4C535F',
              fontSize: '12px',
              fontWeight: '500',
            } }
          >
            Add Preparation Time
          </p>
          <button
            className='rounded-4 bg-transparent px-3 py-1 border-0 w-100 px-5 py-2 mt-2'
            style={ {
              backgroundColor: '#FFFFFF',
              color: '#A6A6A6',
              boxShadow: '1px 2px 11.100000381469727px 0px #0000001A',
            } }
          >
            00h: 25m: 30s
          </button>
        </div>
        <div>
          <button
            className='rounded-4 border-0 px-3 py-2'
            style={ { backgroundColor: '#00BF63', color: '#FFFF' } }
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemProcessCard;
