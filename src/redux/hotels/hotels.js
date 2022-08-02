import axios from 'axios';

const GET_HOTELS = 'hotels/GET_HOTELS';
const POST_HOTEL = 'hotels/POST_HOTEL';
const initialState = [];

export const postHotel = (payload) => ({
  type: POST_HOTEL,
  payload,
});

export const postHotelToApi = (obj, token) => {
  axios.post('https://rails-hotels-api.herokuapp.com/v1/hotels', obj,
    {
      headers: {
        'content-type': 'multipart/form-data',
        token,
      },
    });
};

export const getHotels = (payload) => ({
  type: GET_HOTELS,
  payload,
});

export const getHotelsFromApi = (amount, index, token) => (dispatch) => {
  axios.get(`https://rails-hotels-api.herokuapp.com/v1/hotels?limit=${amount}&offset=${index}`, {
    headers: {
      'Content-type': 'application/json',
      token,
    },
  })
    .then((data) => dispatch(getHotels(data.data)));
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default hotels;
