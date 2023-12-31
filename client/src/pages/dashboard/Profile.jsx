import React from 'react';
import Welcome from '../../components/Welcome';
import useAuthUser from '../../hooks/useAuthUser';
import { FaEdit, FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';
import ModalMain from '../../components/ModalMain';
import { Link, NavLink } from 'react-router-dom';
const avatar = `https://img.freepik.com/free-icon/user_318-159711.jpg`;

const Profile = () => {
  const { userData } = useAuthUser();

  return (
    <div className="content container-fluid">
      <Welcome page={`profile`} />

      <div className="row">
        <div className="col-md-12">
          <div className="profile-header">
            <div className="row align-items-center">
              <div className="col-auto profile-image">
                <a href="#">
                  <img
                    className="rounded-circle"
                    alt="User Image"
                    src={userData?.photo ? userData?.photo : avatar}
                  />
                </a>
              </div>
              <div className="col ml-md-n2 profile-user-info">
                <h4 className="user-name mb-0">{userData?.name}</h4>
                <h6 className="text-muted">{userData?.email}</h6>
                <div className="user-Location">
                  <FaMapMarkerAlt /> Florida, United States
                </div>
                <div className="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </div>
              </div>
              <div className="col-auto profile-btn">
                <a href="#" className="btn btn-primary">
                  Edit
                </a>
              </div>
            </div>
          </div>
          <div className="profile-menu">
            <ul className="nav nav-tabs nav-tabs-solid">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#per_details_tab">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#password_tab">
                  Password
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content profile-tab-cont">
            {/* <!-- Personal Details Tab --> */}
            <div className="tab-pane fade show active" id="per_details_tab">
              {/* <!-- Personal Details --> */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title d-flex justify-content-between">
                        <span>Personal Details</span>
                        <a className="edit-link" data-toggle="modal" href="#edit_personal_details">
                          <FaEdit className="mr-1" /> Edit
                        </a>
                      </h5>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                        <p className="col-sm-10">{userData?.name}</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                        <p className="col-sm-10">{userData?.email}</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                        <p className="col-sm-10">{userData?.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Edit Details Modal --> */}
                  <ModalMain title={`Personal Details`} target={`edit_personal_details`}>
                    <form>
                      <div className="row form-row">
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" value="John" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value="Doe" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Email ID</label>
                            <input type="email" className="form-control" value="johndoe@example.com" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" value="+1 202-555-0125" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">
                        Save Changes
                      </button>
                    </form>
                  </ModalMain>
                  {/* <!-- /Edit Details Modal --> */}
                </div>
              </div>
              {/* <!-- /Personal Details --> */}
            </div>
            {/* <!-- /Personal Details Tab --> */}

            {/* <!-- Change Password Tab --> */}
            <div id="password_tab" className="tab-pane fade">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Change Password</h5>
                  <div className="row">
                    <div className="col-md-10 col-lg-6">
                      <form>
                        <div className="form-group">
                          <label>Old Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /Change Password Tab --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
