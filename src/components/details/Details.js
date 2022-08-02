import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import bg from '../../assets/images/bg-su.jpg';
import Sign from '../extras/sign/sign';
import './details.scss';

function Details() {
  const params = useParams();
  const state = useSelector((store) => store.hotels);
  const loginState = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState.token === null) {
      navigate('/login');
    }
    dispatch(getHotelsFromApi(100, 0, loginState.token));
  }, []);

  if (state.data) {
    const data = state.data.find((x) => x.id === (1 + parseInt(params.hotelId, 10)));
    const {
      address, description, feature, image_path, name,
    } = data;

    const amenities = ['pool', 'air_conditioning', 'bar', 'gym', 'tv'];

    return (
      <section className="details-section">
        <div className="image-details">
          <img alt="hotel" src={image_path || bg} />
        </div>
        <div className="options-details">
          <div className="header-details">
            <h2>{name}</h2>
            <p>{`${address.city}, ${address.country}. zone: ${address.neighbourhood}. ${feature.room} rooms`}</p>
          </div>
          <ul>
            {amenities.map((amenity) => (
              <li key={amenity}>
                {amenity}
                <Sign bool={feature[amenity]} />
              </li>
            ))}
          </ul>
          <p className="description">{description}</p>
          <Link className="link" to="/hotels">
            Discover more hotels
            <span>{'>'}</span>
          </Link>
          <button type="button" className="cta">
            Reserve
            <FontAwesomeIcon icon={faCircleChevronRight} className="fa-thin" />
          </button>
        </div>
      </section>
    );
  }
  return (
    <p>loading</p>
  );
}

export default Details;
