import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Redirect
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const Promiseres = new Promise(resolve => setTimeout(resolve, 0));
  const initialValues = {
    email: '',
    password: '',
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        'https://boli-app.azurewebsites.net/api/restaurant/login',
        values
      );
      const token = response.data.token;
      localStorage.setItem('token', token);

      console.log(response);
      console.log('restaurant id', response.data.data.restaurant._id);

      // Set the restaurant ID properly in localStorage
      localStorage.setItem('restaurantId', response.data.data.restaurant._id);
      toast.promise(Promiseres, {
        pending: 'Logging in...',
        success: `${response.data.message}`,
        error: `${response.data.message}`,
      });
      navigate('/Orders');
    } catch (error) {
      console.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred');
      }
    }
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div
        className='ms-2 d-block d-md-flex  justify-content-around '
        style={{ height: '100vh' }}
      >
        <div className=''>
          <h1
            className='mt-5 d-flex   align-items-center'
            style={{ color: '#00BF63' }}
          >
            BOLI
          </h1>
          <div className='d-flex flex-column justify-content-center h-75 mobv-login'>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <h2 className='fw-bold'>Log In</h2>
                    <p style={{ color: '#667085' }}>
                      Please fill your detail to access your account.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <label htmlFor='email' className='mb-1'>
                      Email
                    </label>
                    <br />
                    <Field
                      type='email'
                      id='email'
                      name='email'
                      className='border rounded-2 p-2  w-100'
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='error '
                    />
                  </div>
                  <div className='mt-3'>
                    <label htmlFor='password' className='mb-1'>
                      Password
                    </label>
                    <br />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        name='password'
                        className='border rounded-2 p-2 w-100 position-relative'
                      />
                      <img
                        src='/passshow.svg'
                        onClick={togglePasswordVisibility}
                        style={{
                          cursor: 'pointer',
                          marginLeft: '280px',
                          position: 'absolute',
                        }}
                        className='mobv-img'
                      />
                    </div>
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='error'
                    />
                  </div>
                  <div className='mt-2 d-flex justify-content-between'>
                    <div>
                      <input type='checkbox' />
                      <label htmlFor='checkbox' className='fw-normal ms-1'>
                        Remember me
                      </label>
                    </div>
                    <Link to='/forgotpassword'>
                      <p
                        style={{
                          color: '#00BF63',
                        }}
                        className='fw-bold'
                      >
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                  <div className='mt-2'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='border rounded-2 p-2 w-100'
                      style={{ background: '#00BF63', color: 'white' }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className='text-center mt-2'>
                    <p>
                      Don’t have an account?{' '}
                      <Link to='/signup'>
                        <span
                          style={{
                            color: '  #00BF63  ',
                          }}
                        >
                          Sign up
                        </span>
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className='object-contain  d-md-flex d-none  '>
          <img src='/Frame 1.png' alt='' className='w-100 h-auto' />
        </div>
      </div>
    </>
  );
};

export default Login;
