import React from 'react';

const StarterCard = ({ Image, price, Name }) => {
  return (
    <div>
      <div className='bg-white shadow rounded-4   mt-4'>
        <div className='w-100'>
          <img
            src={Image}
            alt=''
            className='w-100'
            style={{
              objectFit: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px 15px 15px 15px ',
            }}
          />
        </div>
        <div className='ms-2 py-2'>
          <p style={{ color: '#424242', fontSize: '16px', fontWeight: '400' }}>
            {Name}
          </p>
          <div className='d-flex justify-content-between align-items-center '>
            <div>
              {' '}
              <p
                style={{
                  color: '#00BF63',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                ${price}
              </p>
            </div>
            <div className='pe-2' role='button'>
              {' '}
              <p
                className='my-0 '
                style={{
                  color: '#E54C38',
                  fontSize: '18px',
                  fontWeight: '500',
                  borderBottom: '1px solid #E54C38',
                }}
              >
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterCard;
