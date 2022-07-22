import './App.css';
import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Test from './components/test'
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
