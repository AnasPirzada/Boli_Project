import React from 'react';
import Table from 'react-bootstrap/Table';
import './table.css';
const FoodReservations = () => {
  const data = [
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
    {
      No: '07.',
      Orderno: '010104',
      Name: 'Matt Paul',
      Email: 'johndoe@nomail.com',
      Bill: '$10.80',
    },
  ];

  return (
    <div className='px-5 my-4'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>Table no</th>
            <th className='tablehead text-nowrap '>Order no</th>
            <th className='tablehead'>Name</th>
            <th className='tablehead'>Email</th>
            <th className='tablehead'>Bill</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='tabledata'>{val.No}</td>
              <td className='tabledata'>{val.Orderno}</td>
              <td className='tabledata'>{val.Name}</td>
              <td className='tabledata'>{val.Email}</td>
              <td className='tabledata'>{val.Bill}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FoodReservations;
