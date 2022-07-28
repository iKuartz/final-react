import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Main.scss';
import { getHotelsFromApi } from '../../redux/hotels/hotels';
import { getSession } from '../../storage/session';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#97bf0f' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#97bf0f' }}
      onClick={onClick}
    />
  );
}

const Main = () => {
  const dispatch = useDispatch();
  const session = getSession();
  const navigate = useNavigate();
  const state = useSelector(store => store.hotels);

  useEffect(() => {
    dispatch(getHotelsFromApi(5, 0));
    if (session.token === null) {
      navigate('/login');
    }
  }, [dispatch, navigate, session.token]);

  const hotels = state.data;
  console.log(hotels);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='main__container'>
      <h2 className='main__title'>Recommended Hotels</h2>
      <div className='slider-container'>
        <Slider {...settings}>
          {hotels.map(hotel => (
            <div className='hotel__container' key={hotel.id}>
              <div className='hotel__image-container'>
                <Link to={`/hotel/${hotel.id}`}>
                  <img src={hotel.image_path} alt={hotel.name} />
                </Link>
              </div>
              <div>
                <h4 className='hotel__name'>{hotel.name}</h4>
                <p className='hotel__description'>{hotel.description}</p>
                <p className='hotel__price'>{hotel.address.country}</p>
              </div>
              <div className='sidebar__social-container'>
                <div className='sidebar__social-item'>
                  <FaFacebook size={15} />
                </div>
                <div className='sidebar__social-item'>
                  <FaTwitter size={15} />
                </div>
                <div className='sidebar__social-item'>
                  <FaInstagram size={15} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Main;
