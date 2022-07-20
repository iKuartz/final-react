<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
=======
import Login from './components/login/login';
import Test from './components/test';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import './App.scss';

function App() {
  return (
=======
import Login from './components/login/login';
import Test from './components/test';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import './App.scss';

function App() {
  return (
>>>>>>> 8f753e74dc55dceab9e59ac20866f7bf65456689
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path="/" replace element={ <Test/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
    </Provider>
    </BrowserRouter>
<<<<<<< HEAD
>>>>>>> Styled login page
=======
>>>>>>> 8f753e74dc55dceab9e59ac20866f7bf65456689
  );
}

export default App;
