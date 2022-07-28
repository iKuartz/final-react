import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginReducer from './login/login';
import hotelsReducer from './hotels/hotels';

const store = configureStore({
  reducer: { login: loginReducer, hotels: hotelsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
