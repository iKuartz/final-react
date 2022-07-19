import Login from './components/login/login';
import Test from './components/test';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path="/" replace element={ <Test/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
