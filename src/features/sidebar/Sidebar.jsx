import './Sidebar.scss';
import Logo from './logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar__logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
      <ul className='sidebar__items-container'>
        <li className='sidebar__menu-item'>Add Hotel</li>
        <li className='sidebar__menu-item'>Delete Hotel</li>
        <li className='sidebar__menu-item'>Reserve Hotel</li>
        <li className='sidebar__menu-item'>My Reservations</li>
        <li className='sidebar__menu-item'>Logout</li>
      </ul>
      <div className='sidebar__social'>
        <div className='sidebar__social-item'>
          <FaFacebook size={28} />
        </div>
        <div className='sidebar__social-item'>
          <FaTwitter size={28} />
        </div>
        <div className='sidebar__social-item'>
          <FaInstagram size={28}/>
        </div>
      </div>
      <div className='sidebar__footer'>
        <p>Copyright © 2022</p>
      </div>
    </div>
  );
};

export default Sidebar;
