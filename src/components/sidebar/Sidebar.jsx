import './Sidebar.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from '../logo/logo';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    localStorage.removeItem('session');
    navigate('/login');
  };

  if (location.pathname !== '/login' && location.pathname !== '/signup') {
    return (
      <nav>
        <div className="sidebar__container">
          <button
            type="button"
            className="hide"
            onClick={(e) => {
              e.target.parentNode.classList.toggle('hidden');
            }}
          >
            Menu
          </button>
          <div className="sidebar__logo-container">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="sidebar__items-container">
            <li className="sidebar__menu-item">
              <Link to="/addHotel">
                Add Hotel
              </Link>
            </li>
            <li className="sidebar__menu-item">Delete Hotel</li>
            <li className="sidebar__menu-item">
              <Link to="/add-reservation">Add Reservation</Link>
            </li>
            <li className="sidebar__menu-item">
              <Link to="/reservations">My Reservations</Link>
            </li>
            <li className="sidebar__menu-item">
              <button
                type="button"
                onClick={handleClick}
              >
                Logout
              </button>

            </li>
          </ul>
          <div className="sidebar__social-container">
            <div className="sidebar__social-item">
              <FaFacebook size={20} />
            </div>
            <div className="sidebar__social-item">
              <FaTwitter size={20} />
            </div>
            <div className="sidebar__social-item">
              <FaInstagram size={20} />
            </div>
            <div className="sidebar__social-item">
              <FaPinterest size={20} />
            </div>
          </div>
          <div className="sidebar__footer">
            <p>Copyright © 2022</p>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <></>
  );
};

export default Sidebar;
