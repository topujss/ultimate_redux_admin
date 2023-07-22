import { FaUser, FaUserCog } from 'react-icons/fa';
import { TbHomeDollar } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Dashboard',
    link: '/',
    iconClass: <TbHomeDollar />,
  },
  {
    name: 'Users',
    link: '/user',
    iconClass: <FaUser />,
  },
  {
    name: 'Profile',
    link: '/profile',
    iconClass: <FaUserCog />,
  },
];

const Sidbar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            {menuItems.map(({ name, link, iconClass }, index) => {
              return (
                <li className={name === 'Dashboard' ? 'active' : ''} key={index}>
                  <Link to={link}>
                    <i className="mb-1">{iconClass}</i>
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
