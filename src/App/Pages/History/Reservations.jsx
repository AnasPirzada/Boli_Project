import React from 'react';
import Table from 'react-bootstrap/Table';
import './table.css';
const Reservations = () => {
  const data = [
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
    {
      No: '01.',
      Name: 'Thomas Shelby',
      Date: '16/02/2024',
      tableNo: 'Table of 1',
      Time: '08:00 PM',
    },
  ];

  return (
    <div className='px-5 my-4'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>No</th>
            <th className='tablehead text-nowrap '>Name</th>
            <th className='tablehead'>Date</th>
            <th className='tablehead'>table of</th>
            <th className='tablehead'>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='tabledata'>{val.No}</td>
              <td className='tabledata'>{val.Name}</td>
              <td className='tabledata'>{val.Date}</td>
              <td className='tabledata'>{val.tableNo}</td>
              <td className='tabledata'>{val.Time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reservations;
