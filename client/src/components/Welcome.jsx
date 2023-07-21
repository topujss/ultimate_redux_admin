import useAuthUser from '../hooks/useAuthUser';

const Welcome = ({ page }) => {
  const { userData } = useAuthUser();

  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Welcome {userData?.name}!</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">{page}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
