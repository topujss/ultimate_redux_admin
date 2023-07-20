import logo from '../assets/img/logo.png';
import logoSmall from '../assets/img/logo-small.png';
import docLogo from '../assets/img/doctors/doctor-thumb-01.jpg';

import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/auth/authApiSlice';
import { useEffect } from 'react';
import { setMsgEmpty } from '../features/auth/authSlice';
import { toastMsg } from '../utils/toastAlert.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, message, error } = useSelector((state) => state.authStore);

  // logout a user
  const handleUserLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (error) {
      toastMsg(error);
      dispatch(setMsgEmpty());
    }
    if (message) {
      toastMsg(message);
      dispatch(setMsgEmpty());
    }
    if (!userData) {
      navigate('/login');
    }
  }, [error, message, userData, dispatch, navigate]);

  
  
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

      <a href="#" id="toggle_btn">
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
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>

      {/* <!-- Header Right Menu --> */}
      <ul className="nav user-menu">
        {/* <!-- Notifications --> */}
        <li className="nav-item dropdown noti-dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <Link to="#" className="clear-noti">
                {' '}
                Clear All{' '}
              </Link>
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
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="#">View all Notifications</a>
            </div>
          </div>
        </li>
        {/* <!-- /Notifications --> */}

        {/* <!-- User Menu --> */}
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img className="rounded-circle" src={docLogo} width="31" alt="Ryan Taylor" />
            </span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img src={docLogo} alt="User Image" className="avatar-img rounded-circle" />
              </div>
              <div className="user-text">
                <h6>Ryan Taylor</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <Link className="dropdown-item" to={'/'}>
              My Profile
            </Link>
            <a href="##" onClick={handleUserLogout} className="dropdown-item">
              Logout
            </a>
          </div>
        </li>
        {/* <!-- /User Menu --> */}
      </ul>
    </header>
  );
};

export default Header;
