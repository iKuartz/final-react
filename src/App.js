
import './App.css';
import './App.scss';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/configureStore';
import { Provider } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    <Provider store={store}>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
