import logo from '../assets/img/logo.png';
import logoSmall from '../assets/img/logo-small.png';
import docLogo from '../assets/img/doctors/doctor-thumb-01.jpg';

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
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
				<ul class="nav user-menu">

					{/* <!-- Notifications --> */}
					<li class="nav-item dropdown noti-dropdown">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
						</a>
						<div class="dropdown-menu notifications">
							<div class="topnav-dropdown-header">
								<span class="notification-title">Notifications</span>
								<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
							</div>
							<div class="noti-content">
								<ul class="notification-list">
									<li class="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src={docLogo}/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
													<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="topnav-dropdown-footer">
								<a href="#">View all Notifications</a>
							</div>
						</div>
					</li>
					{/* <!-- /Notifications --> */}
					
					{/* <!-- User Menu --> */}
					<li class="nav-item dropdown has-arrow">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img class="rounded-circle" src={docLogo} width="31" alt="Ryan Taylor"/></span>
						</a>
						<div class="dropdown-menu">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img src={docLogo} alt="User Image" class="avatar-img rounded-circle"/>
								</div>
								<div class="user-text">
									<h6>Ryan Taylor</h6>
									<p class="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<a class="dropdown-item" href="profile.html">My Profile</a>
							<a class="dropdown-item" href="settings.html">Settings</a>
							<a class="dropdown-item" href="login.html">Logout</a>
						</div>
					</li>
					{/* <!-- /User Menu --> */}
					
				</ul>
    </header>
  );
};

export default Header;
