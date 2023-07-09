import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Dashboard',
    link: '/',
    iconClass: 'home',
    linkClass: true,
  },
  {
    name: 'Users',
    link: '/user',
    iconClass: 'user',
    linkClass: false,
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
            {menuItems.map((item, index) => {
              return (
                <li className={item.linkClass === true ? 'active' : ''} key={index}>
                  <Link to={item.link}>
                    <i className={`fe fe-${item.iconClass}`}></i> <span>{item.name}</span>
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
