import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResName = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Restaurant name is required';
    }

    return errors;
  };

  const handleSubmit = values => {
    navigate('/restaurantlocation', { state: { name: values.name } });
  };

  return (
    <div
      className='ms-2 d-block d-md-flex  justify-content-around '
      style={{ height: '100vh' }}
    >
      <div className='  h-100'>
        <div>
          <h1 style={{ color: '#00BF63', marginTop: '100px' }}>BOLI</h1>
        </div>
        <div className='d-flex flex-column justify-content-center h-75'>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <h2 className='fw-bold'>Name of your Restaurant</h2>
                  <p style={{ color: '#667085' }}>
                    Please enter the name of your restaurant.
                  </p>
                </div>
                <div className='mt-4'>
                  <Field
                    type='text'
                    id='name'
                    name='name'
                    className='border rounded-2 p-2  w-100 shadow'
                    placeholder='The Modern.'
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='text-danger'
                  />
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='border rounded-2 p-2 w-100'
                    style={{ background: '#00BF63', color: 'white' }}
                    disabled={isSubmitting}
                  >
                    Next
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className='object-contain  d-md-flex d-none  '>
        <img src='/Frame 2.png' className='w-100 h-auto' />
      </div>
    </div>
  );
};

export default ResName;
