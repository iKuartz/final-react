import './App.css';
import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <div className='app'>
                  <Sidebar />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
