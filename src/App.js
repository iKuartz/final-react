import './App.css';
import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
