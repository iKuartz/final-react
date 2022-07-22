import './Sidebar.scss';
import Logo from '../logo/logo';
import { setSession } from '../../storage/session';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const toggleMenu = () => {
    const sidebar = document.querySelector('.sidebar__container');
    sidebar.classList.toggle('active');
  };

  const navigate = useNavigate()
  const location = useLocation()
  if(location.pathname !== '/login'){
    return (
      <nav>
      <a href='/#' className='toggle-button' onClick={toggleMenu}>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
        <span className='toggle-button__line'></span>
      </a>
      <div className='sidebar__container'>
          <button className='hide' onClick={(e) => {
            e.target.parentNode.classList.toggle('hidden')
          }}>Menu</button>
        <div className='sidebar__logo-container'>
          <Logo/> 
        </div>
        <ul className='sidebar__items-container'>
          <li className='sidebar__menu-item'>Add Hotel</li>
          <li className='sidebar__menu-item'>Delete Hotel</li>
          <li className='sidebar__menu-item'>Reserve Hotel</li>
          <li className='sidebar__menu-item'>My Reservations</li>
          <li className='sidebar__menu-item' onClick={() => {
            setSession('')
            navigate('/login')
          }}>Logout</li>
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
    </nav>
  );
};
}

export default Sidebar;
