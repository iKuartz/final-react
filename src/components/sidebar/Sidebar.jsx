import './Sidebar.scss';
import Logo from '../../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  const toggleMenu = () => {
    const logo = document.querySelector('.sidebar__logo-container');
    const menuItems = document.querySelector('.sidebar__items-container');
    const socialMedia = document.querySelector('.sidebar__social-container');
    const footer = document.querySelector('.sidebar__footer');
    logo.classList.toggle('active');
    menuItems.classList.toggle('active');
    socialMedia.classList.toggle('active');
    footer.classList.toggle('active');
  };

  return (
    <div className='sidebar__container'>
      <a href='/#' className='toggle-button' onClick={toggleMenu}>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
      </a>
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
          <FaFacebook size={28} />
        </div>
        <div className='sidebar__social-item'>
          <FaTwitter size={28} />
        </div>
        <div className='sidebar__social-item'>
          <FaInstagram size={28} />
        </div>
      </div>
      <div className='sidebar__footer'>
        <p>Copyright © 2022</p>
      </div>
    </div>
  );
};

export default Sidebar;
