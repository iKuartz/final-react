import axios from 'axios';
import { getSession } from '../../storage/session';

// action types
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const NEW_RESERVATION = 'NEW_RESERVATION';
const DEL_RESERVATION = 'DEL_RESERVATION';

const URL = 'https://rails-hotels-api.herokuapp.com/v1';
const session = getSession();
const config = {
  headers: {
    'Content-type': 'application/json',
    token: session.token
  }
};

// action creatorS
export const getReservations = () => async dispatch => {
  const response = await axios
    .get(`${URL}/reservation`, config)
    .then(res => res.data);
  dispatch({
    type: GET_RESERVATIONS,
    payload: response
  });
};

export const newReservations =
  (rooms, hotelId, startDate, endDate) => async (dispatch) => {
    const data = {
      reservation: {
        reserved_rooms: rooms,
        hotel_id: hotelId,
        start_date: startDate,
        end_date: endDate
      }
    };

    const response = await axios
      .post(`${URL}/reservation`, data, config)
      .then(res => res.data);

    dispatch({
      type: NEW_RESERVATION,
      payload: response
    });
  };

export const delReservations = id => async dispatch => {
  const response = await axios
    .delete(`${URL}/reservation/${id}`, config)
    .then(res => res.data);

  dispatch({
    type: DEL_RESERVATION,
    payload: response
  });
};

// reducer
export default function reservationsReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;

    case GET_RESERVATIONS:
      return action.payload;
  }
}
