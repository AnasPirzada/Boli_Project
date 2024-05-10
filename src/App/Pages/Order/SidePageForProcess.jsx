
import React from 'react';

import ItemProcessCard from './SidePageForProcessCard.jsx';

const SidePageForProcess = ( { tableNumber, discountAmount, totalAmount, data } ) =>
{
  const olddata = [
    { title: 'Table Number', number: tableNumber },
    { title: 'Matt Paul', number: 'johnsondoe@nomail.com' },
  ];



  const tableItems = olddata.map( ( item, index ) => (
    <div key={ index } className='d-flex '>
      <div
        className='me-3'
        style={ {
          height: '50px',
          width: '0',
          borderLeft: '7px solid #2DCC70',
          borderRadius: '50px',
        } }
      ></div>
      <div className=''>
        <p className='my-0 resfont' style={ { color: '#A6A6A6', fontWeight: '500' } }>
          { item.title }
        </p>
        <p className='my-0 resfont' style={ { color: '#444444', fontWeight: '400' } }>
          { item.number }
        </p>
      </div>
    </div>
  ) );

  return (
    <div>
      <div className='d-flex flex-column justify-content-start align-items-start mt-2'>
        <p style={ { color: '#00BF63', fontSize: '24px', fontWeight: '700' } }>Order Details</p>
        <p style={ { color: '#717171', fontSize: '15px', fontWeight: '500' } }>{ `Order for ${ tableNumber }` }</p>
      </div>

      <div className='d-flex my-5 justify-content-between align-items-center w-50'>{ tableItems }</div>

      <div>

        <div className='mt-4'>
          <ItemProcessCard
            discountAmount={ discountAmount }
            totalAmount={ totalAmount }
            data={ data }
          />
        </div>
      </div>
    </div>
  );
};

export default SidePageForProcess;
