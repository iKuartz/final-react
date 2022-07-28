import { useSelector } from 'react-redux';
import './reservations.scss';

const AddReservation = () => {
  const state = useSelector(store => store.hotels);
  let hotelList = [];

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  if (state.data) {
    const hotels = state.data;

    hotelList = hotels.map(house => (
      <option key={house.id} value={house.id}>
        {house.name}
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
            <select id='nameContent' name='nameContent' className='form-select'>
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
