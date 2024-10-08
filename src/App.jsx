import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import History from './App/Pages/History/index.jsx';
import ForgotPassword from './App/Pages/Login/ForgotPassword.jsx';
import Login from './App/Pages/Login/Login.jsx';
import AddLoylity from './App/Pages/Loyalty/AddLoylity.jsx';
import Loyalty from './App/Pages/Loyalty/index.jsx';
import AddNewCategory from './App/Pages/Menu/AddMenu/AddNewCategory.jsx';
import Add from './App/Pages/Menu/AddMenu/index.jsx';
import Menu from './App/Pages/Menu/index.jsx';
import Notification from './App/Pages/Notification/index.jsx';
import Orders from './App/Pages/Order/index.jsx';
import AddNewQr from './App/Pages/QR/AddQr.jsx';
import QR from './App/Pages/QR/index.jsx';
import Otp from './App/Pages/Register/OtpVerification.jsx';
import RestaurantLocation from './App/Pages/Register/RegLocation.jsx';
import RestaurantName from './App/Pages/Register/ResName.jsx';
import SignUp from './App/Pages/Register/SignUp.jsx';
import Registered from './App/Pages/Registered/index.jsx';
import Reservations from './App/Pages/Reservations/index.jsx';
import Settings from './App/Pages/Setting/index.jsx';
import Stats from './App/Pages/Stats/index.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Orders />} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/restaurantname' element={<RestaurantName />} />
          <Route path='/restaurantlocation' element={<RestaurantLocation />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Reservations' element={<Reservations />} />
          <Route path='/Registered' element={<Registered />} />
          <Route path='/Loyalty' element={<Loyalty />} />
          <Route path='/AddLoylity' element={<AddLoylity />} />
          <Route path='/History' element={<History />} />
          <Route path='/Stats' element={<Stats />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/QR' element={<QR />} />
          <Route path='/AddNewQr' element={<AddNewQr />} />
          <Route path='/AddNewCategory' element={<AddNewCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
