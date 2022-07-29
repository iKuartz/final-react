import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/login';
import Details from './components/details/Details';
import { getSessionFromLocalStorage } from './redux/login/login';
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotel/:hotelId" element={<Details />} />
        <Route path="/add-reservation" element={<AddReservation />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
