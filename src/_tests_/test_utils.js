import React from "react";
import { render as mockRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../redux/login/login'
import hotelsReducer from '../redux/hotels/hotels'
import reservationsReducer from '../redux/reservations/reservations'
import { PropTypes } from 'prop-types';

function render(
    ui,
    {
      preloadedState,
      store = configureStore({
        reducer: {
          login: loginReducer,
          reservation: reservationsReducer,
          hotels: hotelsReducer,
        },
        preloadedState,
      }),
      ...renderOptions
    } = {},
  ) {
    function Wrapper({ children }) {
      return (
        <BrowserRouter>
            <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      );
    }
    Wrapper.propTypes = {
      children: PropTypes.objectOf(String).isRequired,
    };
    return mockRender(ui, { wrapper: Wrapper, ...renderOptions });
  }
  
  // re-export everything
  export * from '@testing-library/react';
  // override render method
  export { render };