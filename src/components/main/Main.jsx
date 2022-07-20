import Carousel from 'react-multi-carousel';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import './Main.scss';

const hotels = [
  {
    id: 1,
    name: 'Papagayo Hotel',
    image_url: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    description:
      'Ideally set in the Centro district of Playa del Carmen, Papagayo Hotel Boutique is located a 3-minute walk from Playa del Carmen Beach, 458 m from Playacar Beach.',
    price: '$200'
  },
  {
    id: 2,
    name: 'In Fashion Hotel & Spa',
    image_url: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    description:
      'Located in Playa del Carmen, In Fashion Hotel & Spa is 100 m from the Caribbean Sea.1 outdoor pool and a terrace with ocean views. Enjoy the experience!',
    price: '$300'
  },
  {
    id: 3,
    name: 'Wyndham Garden ',
    image_url: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    description:
      'This property is a 12-minute walk from the beach. Located in the gated community Playacar in Playa del Carmen, Wyndham Garden Playa del Carmen hotel.',
    price: '$400'
  },
  {
    id: 4,
    name: 'Hotel Riviera Del Sol',
    image_url: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    description:
      'This property is 2 minutes walk from the beach. Set in beautiful tropical gardens, Riviera Del Sol is set 3 minutes walk from the beach, on the Mayan Riviera.',
    price: '$500'
  }
];

const Main = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='main__container'>
      <h2 className='main__title'>Recommended Hotels</h2>
      <Carousel
        className='carousel'
        responsive={responsive}
        infinite
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-5-px'
      >
        {hotels.map(hotel => (
          <div className='hotel__container' key={hotel.id}>
            <div className='hotel__image-container'>
              <img src={hotel.image_url} alt={hotel.name} />
            </div>
            <div>
              <h4 className='hotel__name'>{hotel.name}</h4>
              <p>{hotel.description}</p>
              <p className='hotel__price'>{hotel.price} per night</p>
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
      </Carousel>
    </div>
  );
};

export default Main;
