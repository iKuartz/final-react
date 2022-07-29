import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginReducer from './login/login';
import hotelsReducer from './hotels/hotels';
import reservationsReducer from './reservations/reservations';

const store = configureStore({
  reducer: {
    login: loginReducer,
    hotels: hotelsReducer,
    reservations: reservationsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
