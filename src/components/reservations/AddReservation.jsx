import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import { getSession } from '../../storage/session';
import './reservations.scss';

const AddReservation = () => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.hotels);
  const [hotelId, setHotelId] = useState('');
  const [rooms, setRooms] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userId, setUserId] = useState('');
  const session = getSession();
  const navigate = useNavigate();
  let hotelList = [];

  useEffect(() => {
    if (session.token === null) {
      navigate('/login');
    }
    dispatch(getHotelsFromApi(5, 0));
  }, [dispatch, navigate]);

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('FORM DATA:')
    console.log(hotelId);
    console.log(rooms);
    console.log(startDate);
    console.log(endDate);
  };

  if (state.data) {
    const hotels = state.data;

    hotelList = hotels.map(hotel => (
      <option key={hotel.id} value={hotel.id}>
        {hotel.name}
      </option>
    ));
  }

  return (
    <div className='center-vertical'>
      <div className='container'>
        <h2>Add Reservation</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor='nameContent' className='form-label'>
              Hotel:
            </label>
            <select
              id='nameContent'
              name='nameContent'
              className='form-select'
              value={hotelId}
              onChange={e => setHotelId(e.target.value)}
            >
              <option value=''> - Select Hotel - </option>
              {hotelList}
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='rooms' className='form-label'>
              Rooms:{' '}
            </label>
            <input
              id='rooms'
              className='form-control'
              name='rooms'
              type='number'
              min='1'
              value={rooms}
              onChange={e => setRooms(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='startDateContent' className='form-label'>
              Start Date:{' '}
            </label>
            <input
              id='startDateContent'
              className='form-control'
              name='startDateContent'
              type='date'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='endDateContent' className='form-label'>
              End Date:{' '}
            </label>
            <input
              id='endDateContent'
              className='form-control'
              name='endDateContent'
              type='date'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleOnSubmit}
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReservation;