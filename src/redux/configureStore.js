import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginReducer from './login/login'

const store = configureStore({ reducer: { login: loginReducer }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store