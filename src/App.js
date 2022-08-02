import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getSessionFromLocalStorage } from './redux/login/login';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/login';
import Details from './components/details/Details';
import AddHotel from './components/addHotel/AddHotel';
import AddReservation from './components/reservations/AddReservation';
import Reservations from './components/reservations/Reservations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionFromLocalStorage());
  }, []);

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/hotels" element={<Main />} />
        <Route path="/hotel/:hotelId" element={<Details />} />
        <Route path="/addHotel" element={<AddHotel />} />
        <Route path="/add-reservation" element={<AddReservation />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
