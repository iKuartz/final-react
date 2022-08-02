import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import login from './login/login';
import hotels from './hotels/hotels';
import reservations from './reservations/reservations';

const store = configureStore({
  reducer: {
    login,
    hotels,
    reservations,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
