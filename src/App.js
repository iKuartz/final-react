import './App.css';
import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/login';
import Details from './components/details/Details';
import { getSessionFromLocalStorage } from './redux/login/login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()

   useEffect(() => {
   dispatch(getSessionFromLocalStorage())
  }, [])

  return (
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/hotel/:hotelId' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
