import logo from '../assets/img/logo.png';
import logoSmall from '../assets/img/logo-small.png';
import docLogo from '../assets/img/doctors/doctor-thumb-01.jpg';

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useDropdownPopup from '../hooks/useDropdownPopup';

const Header = () => {
  const { isOpen, toggleMenu, dropdownRef } = useDropdownPopup();
  const { isOpen: isNoti, toggleMenu: notiMenu, dropdownRef: notiRef } = useDropdownPopup();

  return (
    <header className="header">
      {/* <!-- Logo --> */}
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <a href="index.html" className="logo logo-small">
          <img src={logoSmall} alt="Logo" width="30" height="30" />
        </a>
      </div>
      {/* <!-- /Logo --> */}

      <a href="javascript:void(0);" id="toggle_btn">
        <i className="fe fe-text-align-left"></i>
      </a>

      <div className="top-nav-search">
        <form>
          <input type="text" className="form-control" placeholder="Search here" />
          <button className="btn" type="submit">
            <i>
              <FaSearch />
            </i>
          </button>
        </form>
      </div>

      {/* <!-- Mobile Menu Toggle --> */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>
      {/* <!-- /Mobile Menu Toggle --> */}

      {/* <!-- Header Right Menu --> */}
      <ul className="nav user-menu">
        {/* <!-- Notifications --> */}
        <li className="nav-item dropdown noti-dropdown" ref={notiRef}>
          <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={notiMenu}>
            <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span>
          </Link>
          {isNoti && (
            <div className="dropdown-menu notifications d-block" style={{ transform: 'translateX(-19rem)' }}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {' '}
                  Clear All{' '}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={docLogo} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Dr. Ruby Perrin</span> Schedule{' '}
                            <span className="noti-title">her appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient1.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Charlene Reed</span> has booked her appointment to{' '}
                            <span className="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient2.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Travis Trimble</span> sent a amount of $210 for his{' '}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient3.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Carl Kelly</span> send a message{' '}
                            <span className="noti-title"> to his doctor</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          )}
        </li>
        {/* <!-- /Notifications --> */}

        {/* <!-- User Menu --> */}
        <li className="nav-item dropdown has-arrow" ref={dropdownRef}>
          <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={toggleMenu}>
            <span className="user-img">
              <img className="rounded-circle" src={docLogo} width="31" alt="Ryan Taylor" />
            </span>
          </Link>
          {isOpen && (
            <div className="dropdown-menu d-block" style={{ transform: 'translateX(-8rem)' }}>
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img src={docLogo} alt="User Image" className="avatar-img rounded-circle" />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <Link className="dropdown-item" to="/login">
                Logout
              </Link>
            </div>
          )}
        </li>
        {/* <!-- /User Menu --> */}
      </ul>
      {/* <!-- /Header Right Menu --> */}
    </header>
  );
};

export default Header;
