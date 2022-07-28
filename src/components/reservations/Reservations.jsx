import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import { getSession } from '../../storage/session';

const Reservations = () => {
  const dispatch = useDispatch();
  const session = getSession();
  const navigate = useNavigate();
  const state = useSelector(store => store.hotels);

  useEffect(() => {
    if (session.token === null) {
      navigate('/login');
    }
    dispatch(getHotelsFromApi(5, 0));
  }, [dispatch, navigate]);

  if (state.data) {
    const hotels = state.data;

    return (
      <div className='main__container'>
        <h2 className='main__title'>Recommended Hotels</h2>
      </div>
    );
  }
};

export default Reservations;
