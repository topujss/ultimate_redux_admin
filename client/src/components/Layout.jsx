import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidbar from './Sidbar';

const Layout = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidbar />
        {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <Outlet />
          </div>
        </div>
        {/* <!-- /Page Wrapper --> */}
      </div>
    </>
  );
};

export default Layout;
