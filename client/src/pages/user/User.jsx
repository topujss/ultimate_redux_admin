import React, { useEffect, useState } from 'react';
import Welcome from '../../components/Welcome';

import docFirst from '../../assets/img/doctors/doctor-thumb-01.jpg';
import patFirst from '../../assets/img/patients/patient1.jpg';
import ModalMain from '../../components/ModalMain';
import DataTable from 'datatables.net-dt';

const User = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    new DataTable('.datatable');
  });

  return (
    <>
      <Welcome name="ahmed" page="Users" />
      <ModalMain target={`userModal`} title="Add a new user">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis provident quisquam animi esse
          libero rem voluptatum assumenda odio rerum, corrupti sit, amet ipsam? Eum atque molestias et? Nisi,
          neque!
        </p>
      </ModalMain>

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mb-4" data-toggle="modal" data-target="#userModal">
            Add new
          </button>

          {/* <!-- Recent Orders --> */}
          <div className="card card-table p-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Patient Name</th>
                      <th>Apointment Time</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">
                            <img className="avatar-img rounded-circle" src={docFirst} alt="User Image" />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">
                            <img className="avatar-img rounded-circle" src={patFirst} alt="User Image" />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            defaultChecked={toggle}
                            onChange={() => setToggle(true)}
                          />
                          <label htmlFor="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-right">$200.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- /Recent Orders --> */}
        </div>
      </div>
    </>
  );
};

export default User;
