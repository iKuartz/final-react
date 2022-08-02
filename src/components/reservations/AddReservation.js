import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import { newReservations } from '../../redux/reservations/reservations';
import './reservations.scss';

const AddReservation = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.hotels);
  const [hotelId, setHotelId] = useState('');
  const [rooms, setRooms] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const loginState = useSelector((store) => store.login);
  const navigate = useNavigate();
  let hotelList = [];

  useEffect(() => {
    if (loginState.token === null) {
      navigate('/login');
      return;
    }
    dispatch(getHotelsFromApi(20, 0, loginState.token));
  }, [loginState]);

  useEffect(() => {
    if (state.data) {
      hotelList = state.data.map((hotel) => (
        <option key={hotel.id} value={hotel.id}>
          {hotel.name}
        </option>
      ));
    }
  }, [state]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(newReservations(rooms, hotelId, startDate, endDate, loginState.token)).then(() => {
      navigate('/reservations');
    });
  };

  if (state.data) {
    const hotels = state.data;

    hotelList = hotels.map((hotel) => (
      <option key={hotel.id} value={hotel.id}>
        {hotel.name}
      </option>
    ));
  }

  return (
    <div className="center-vertical">
      <div className="container">
        <h2>Add Reservation</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="nameContent" className="form-label">
              Hotel:
              <select
                id="nameContent"
                name="nameContent"
                className="form-select"
                value={hotelId}
                onChange={(e) => setHotelId(e.target.value)}
                required
              >
                <option value="">- Select Hotel -</option>
                {hotelList}
              </select>
            </label>

          </div>
          <div className="mb-3">
            <label htmlFor="rooms" className="form-label">
              Rooms:
              {' '}
            </label>
            <input
              id="rooms"
              className="form-control"
              name="rooms"
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="startDateContent" className="form-label">
              Start Date:
              {' '}
            </label>
            <input
              id="startDateContent"
              className="form-control"
              name="startDateContent"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endDateContent" className="form-label">
              End Date:
              {' '}
            </label>
            <input
              id="endDateContent"
              className="form-control"
              name="endDateContent"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReservation;
