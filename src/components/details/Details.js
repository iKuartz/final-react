import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getSession } from '../../storage/session';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import bg from '../../assets/images/bg-su.jpg';
import Sign from '../extras/sign/sign';
import './details.scss';

function Details() {
  const params = useParams();
  const state = useSelector((store) => store.hotels);
  const session = getSession();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHotelsFromApi(100, 0));
    if (session.token === null) {
      navigate('/login');
    }
  }, []);

  if (state.data) {
    const data = state.data.find((x) => x.id === (1 + parseInt(params.hotelId, 10)));
    const {
      address, description, feature, image_path, name,
    } = data;

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
            <li>
              {' '}
              pool
              <Sign bool={feature.pool} />
            </li>
            <li>
              {' '}
              air conditioning
              <Sign bool={feature.air_conditioning} />
            </li>
            <li>
              {' '}
              bar
              <Sign bool={feature.bar} />
            </li>
            <li>
              {' '}
              gym
              <Sign bool={feature.gym} />
            </li>
            <li>
              {' '}
              tv
              <Sign bool={feature.tv} />
            </li>
          </ul>
          <p className="description">{description}</p>
          <a className="link" href="/">
            Discover more hotels
            <span>{'>'}</span>
          </a>
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
