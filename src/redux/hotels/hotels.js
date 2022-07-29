import axios from 'axios';
import { getSession } from '../../storage/session';

const GET_HOTELS = 'hotels/GET_HOTELS';
const POST_HOTEL = 'hotels/POST_HOTEL';

const session = getSession();
const initialState = [];

export const postHotel = (payload) => ({
  type: POST_HOTEL,
  payload,
});

const config2 = {
  headers: {
    'content-type': 'multipart/form-data',
    token: session.token,
  },
};

export const postHotelToApi = (obj) => {
  axios.post('http://rails-hotels-api.herokuapp.com/v1/hotels', obj, config2);
};

export const getHotels = (payload) => ({
  type: GET_HOTELS,
  payload,
});

const config = {
  headers: {
    'Content-type': 'application/json',
    token: session.token,
  },
};

export const getHotelsFromApi = (amount, index) => (dispatch) => {
  axios.get(`http://rails-hotels-api.herokuapp.com/v1/hotels?limit=${amount}&offset=${index}`, config)
    .then((data) => dispatch(getHotels(data.data)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;