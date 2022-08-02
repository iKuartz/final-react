import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import {
  delReservations,
  getReservations,
} from '../../redux/reservations/reservations';

function Reservations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((store) => store.reservations, shallowEqual);
  const hotelsData = useSelector((store) => store.hotels);
  const loginState = useSelector((store) => store.login);
  const { reservations } = state;
  let hotels = [];

  useEffect(() => {
    if (loginState.token === null) {
      navigate('/login');
      return;
    }
    dispatch(getReservations(loginState.token));
    dispatch(getHotelsFromApi(10, 0, loginState.token));
  }, [loginState]);

  if (state.reservations && hotelsData.data) {
    hotels = hotelsData.data;

    return (
      <div className="main__container">
        <h2 className="main__title">My Reservations</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Hotel</th>
              <th scope="col">Rooms</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} id={`reservation-${reservation.id}`}>
                <td>
                  {hotels.find((hotel) => hotel.id === reservation.hotel_id).name}
                </td>
                <td>{reservation.reserved_rooms}</td>
                <td>{reservation.date_from}</td>
                <td>{reservation.date_to}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(delReservations(reservation.id, loginState.token));
                      document
                        .getElementById(`reservation-${reservation.id}`)
                        .remove();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="main__container">
      <h2 className="main__title">My Reservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Hotel</th>
            <th scope="col">Rooms</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Reservations;
