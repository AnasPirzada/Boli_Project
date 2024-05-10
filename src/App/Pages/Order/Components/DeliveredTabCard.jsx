import React from 'react';

const greenLineStyle = {
  width: '15px',
  height: '100px',
  backgroundColor: '#00BF63',
  borderTopLeftRadius: '100px',
  borderBottomLeftRadius: '100px',
};

const whiteLineStyle = {
  width: '15px',
  height: '100px',
  backgroundColor: '#FFFF',
  borderTopLeftRadius: '100px',
  borderBottomLeftRadius: '100px',
};

const DeliveredTabCard = ({ tableNo, description, price, clicked, onClick }) => {
  return (
    <div>
      <div
        className={`d-flex my-3 shadow justify-content-start align-items-start rounded-4 ${
          clicked ? 'card-clicked' : ''
        }`}
        onClick={onClick}
      >
        {clicked ? (
          <div className='green-line' style={greenLineStyle}></div>
        ) : (
          <div className='white-line' style={whiteLineStyle}></div>
        )}
        <div className='d-flex flex-grow-1 justify-content-between align-items-center m-1  p-2 '>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <p
              style={{ color: '#444444', fontSize: '18px', fontWeight: '600' }}
            >
              {tableNo}
            </p>
            <p
              style={{ color: '#444444', fontSize: '14px', fontWeight: '400' }}
            >
              {description}
            </p>
            <p
              style={{ color: '#222222', fontSize: '16px', fontWeight: '700' }}
            >
              {price}
            </p>
          </div>
          <div className='text-end'>
            <button
              className='border-0 px-3 py-1 rounded-3 '
              style={{ backgroundColor: '#00BF63', color: '#FFFF' }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveredTabCard;
