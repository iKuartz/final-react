import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/login'

const store = configureStore({ reducer: { login: loginReducer } })

export default store