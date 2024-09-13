import axios from 'axios';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseurl } from '../../../const';
import './otp.css';

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerification = async () => {
    setLoading(true); // Set loading state to true when API call starts
    setError(''); // Clear previous errors
    try {
      const response = await axios.post(`${baseurl}api/restaurant/verify`, {
        email,
        otp,
      });
      console.log(response.data);
      // If the OTP is successfully verified, redirect the user to a success page
      // history.push("/verification-success");
      navigate('/restaurantname');
    } catch (error) {
      setError(
        error.response?.data?.message ||
          'An error occurred while verifying OTP.'
      );
    }
    setLoading(false); // Set loading state to false after API call completes
  };

  return (
    <div
      className='ms-2 d-block d-md-flex  justify-content-around '
      style={{ height: '100vh' }}
    >
      <div>
        <h1 className='mt-5 m-auto w-75 ' style={{ color: '#00BF63' }}>
          BOLI
        </h1>
        <div className='d-flex flex-column justify-content-center m-auto w-75 h-75 mobv-login'>
          <div>
            <h2 className='fw-bold'>Verification Code</h2>
            <p className='m-auto' style={{ color: '#667085' }}>
              Please enter the verification code we sent you on {email}
            </p>
          </div>
          <div className='mt-4'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={props => (
                <input
                  {...props}
                  className='border-0 text-center shadow rounded-3 p-2 py-3 ms-3'
                  style={{ width: '10%', fontSize: '16px' }}
                />
              )}
            />
          </div>
          {error && (
            <p className='mt-3' style={{ color: 'red' }}>
              {error}
            </p>
          )}
          <div className='mt-4'>
            <button
              type='button'
              className='border rounded-2 p-2 w-100'
              style={{ background: '#00BF63', color: 'white' }}
              onClick={handleVerification}
              disabled={loading} // Disable the button while loading
            >
              {loading ? 'Verifying...' : 'Done'}
            </button>
          </div>
        </div>
      </div>
      <div className='object-contain d-md-flex d-none'>
        <img src='/Frame 4.png' className='w-100 h-auto' />
      </div>
    </div>
  );
};

export default OtpVerification;
