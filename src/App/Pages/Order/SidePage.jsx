import React from 'react';
import ItemCard from './SidePageCard.jsx';
const SidePage = () => {
  // Define your data array
  const data = [
    { title: 'Table Number', number: '07' },
    { title: 'Preparation Time', number: '00h: 25m: 30s' },
    { title: 'Matt Paul', number: '+00 123 321 456' },
  ];

  const tableItems = data.map((item, index) => (
    <div key={index} className='d-flex '>
      <div
        className='me-3'
        style={{
          height: '50px',
          width: '0',
          borderLeft: '7px solid #2DCC70',
          borderRadius: '50px',
        }}
      ></div>
      <div className='d-flex flex-column justify-content-start align-items-start'>
        <p
          className='my-0 resfont'
          style={{ color: '#A6A6A6', fontWeight: '500' }}
        >
          {item.title}
        </p>
        <p
          className='my-0 resfont'
          style={{ color: '#444444', fontWeight: '400' }}
        >
          {item.number}
        </p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='d-flex flex-column justify-content-start align-items-start mt-2'>
        <p style={{ color: '#00BF63', fontSize: '24px', fontWeight: '700' }}>
          Order Details
        </p>
        <p style={{ color: '#717171', fontSize: '15px', fontWeight: '500' }}>
          Order #010104
        </p>
      </div>

      <div className='d-flex my-5 justify-content-between align-items-center'>
        {tableItems}
      </div>

      <div className='mt-4'>
        <ItemCard />
      </div>
    </div>
  );
};

export default SidePage;
