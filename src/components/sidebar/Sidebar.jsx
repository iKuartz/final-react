import './Sidebar.scss';
import Logo from '../../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Sidebar = () => {
  const toggleMenu = () => {
    const sidebar = document.querySelector('.sidebar__container');
    sidebar.classList.toggle('active');
  };

  return (
    <>
      <a href='/#' className='toggle-button' onClick={toggleMenu}>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
      </a>
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
        <div className='sidebar__social-container'>
          <div className='sidebar__social-item'>
            <FaFacebook size={20} />
          </div>
          <div className='sidebar__social-item'>
            <FaTwitter size={20} />
          </div>
          <div className='sidebar__social-item'>
            <FaInstagram size={20} />
          </div>
          <div className='sidebar__social-item'>
            <FaPinterest size={20} />
          </div>
        </div>
        <div className='sidebar__footer'>
          <p>Copyright © 2022</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
