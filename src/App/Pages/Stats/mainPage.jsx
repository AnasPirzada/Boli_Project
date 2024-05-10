import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';

const mainPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('October');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
  ];

  const handleChangeMonth = () => {
    const currentIndex = months.indexOf(selectedMonth);
    const nextIndex = (currentIndex + 1) % months.length;
    setSelectedMonth(months[nextIndex]);
  };

  // Function to generate random data for a month
  const generateRandomData = () => {
    const randomData = [];
    for (let i = 0; i < 15; i++) {
      // Generating 15 random data points
      randomData.push(Math.floor(Math.random() * 50) + 1); // Generating random number between 1 and 50
    }
    return randomData;
  };

  // Data for each month
  const monthData = {
    January: generateRandomData(),
    February: generateRandomData(),
    March: generateRandomData(),
    April: generateRandomData(),
    May: generateRandomData(),
    June: generateRandomData(),
    July: generateRandomData(),
    August: generateRandomData(),
    September: generateRandomData(),
    October: [30, 26, 23, 20, 25, 35, 45, 48, 42, 36, 32, 27, 35, 36, 10], // Default data for October
  };

  // Options and series for the chart
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false, // Hides the toolbar
      },
    },
    colors: ['rgba(0, 191, 99, 0.51) '], // Color for the chart series
    fill: {
      type: 'gradient', // Use gradient for filling the area
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: Array.from(
        { length: 15 },
        (_, i) => `${selectedMonth.substr(0, 3)} ${i + 1}`
      ), // Dynamically generate x-axis labels based on selected month
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return `$${val}k`;
        },
      },
    },
    dataLabels: {
      enabled: false, // Hide the data labels on the chart line
    },
  };

  return (
    <div>
      <div className='m-2 mb-4 pb-3 shadow rounded-3 '>
        <div className='p-4'>
          <p
            className='textColor'
            style={{ fontSize: '22px', fontWeight: '700' }}
          >
            Stats
          </p>
        </div>

        <div className=' w-75 mobilewidth ms-0 ms-md-4 p-3 rounded-3 shadow'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <p
                className='my-0'
                style={{
                  fontSize: '16px',
                  color: '#212121',
                  fontWeight: '600',
                }}
              >
                Haily Matt
              </p>
            </div>
            <div>
              <img src='/public/Group 32485.svg' alt='' />
              <img src='/public/Group 32486.svg' alt='' />
            </div>
          </div>

          <p
            style={{
              color: '#717171',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            Acc :
            <span
              style={{
                color: '#717171',
                fontSize: '14px',
                fontWeight: '400',
              }}
            >
              {' '}
              009898989898
            </span>
          </p>

          <div className='d-flex justify-content-between align-item-center'>
            <p
              className='w-50'
              style={{ color: '#717171', fontSize: '14px', fontWeight: '400' }}
            >
              Lorem ipsum dolor sit amet consectetur. Diam volutpat rhoncus
              gravida sed ac egestas.
            </p>
            <p
              className='mt-4'
              style={{ color: '#212121', fontSize: '14px', fontWeight: '700' }}
            >
              Phone no :
              <span
                style={{
                  color: '#212121',
                  fontSize: '14px',
                  fontWeight: '400',
                }}
              >
                {' '}
                00 1233212
              </span>{' '}
            </p>
          </div>
        </div>

        <div >
          <Row className='mt-4 '>
            <Col lg={3}>
              {' '}
              <Row className='shadow ms-0 ms-md-4 rounded-4 p-3 '>
                <Col lg={2}>
                  <img src='/a down.svg' alt='' />
                </Col>
                <Col lg={8}>
                  <div className='d-flex-column justify-content-start align-items-start'>
                    <p
                      style={{
                        color: '#717171A3',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      Income
                    </p>
                    <p
                      style={{
                        color: '#444444',
                        fontSize: '16px',
                        fontWeight: '600',
                      }}
                    >
                      $ 73.837,12
                    </p>
                  </div>
                </Col>
                <Col lg={2}>
                  <img src='/dots.svg' alt='' />
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Row className='shadow ms-0 ms-md-4 rounded-4 p-3 '>
                <Col lg={2}>
                  <img src='/a up.svg' alt='' />
                </Col>
                <Col lg={8}>
                  <div className='d-flex-column justify-content-start align-items-start'>
                    <p
                      style={{
                        color: '#717171A3',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      Income
                    </p>
                    <p
                      style={{
                        color: '#444444',
                        fontSize: '16px',
                        fontWeight: '600',
                      }}
                    >
                      $ 73.837,12
                    </p>
                  </div>
                </Col>
                <Col lg={2}>
                  <img src='/dots.svg' alt='' />
                </Col>
              </Row>
            </Col>
            <Col lg={6}></Col>
          </Row>

        </div>

        <div className='d-flex justify-content-between align-items-center p-3 ms-4'>
          <p style={{ color: '#444444', fontSize: '16px', fontWeight: '500' }}>
            Balance
          </p>

          <button
            className='shadow rounded-3 px-3 py-2 d-flex justify-content-between align-items-center border-0 bg-transparent textColor'
            style={{ fontSize: '14px', fontWeight: '400' }}
            onClick={handleChangeMonth}
          >
            {selectedMonth}{' '}
            <img src='/buttonarrow.svg' className='ms-3' alt='' />
          </button>
        </div>

        <div className='shadow rounded-3 m-4 mb-5' style={{ height: '416px' }}>
          <Chart
            options={options}
            series={[{ name: 'Balance', data: monthData[selectedMonth] }]}
            type='area'
            height={350}
          />
        </div>
      </div>
    </div>
  );
};
export default mainPage;
