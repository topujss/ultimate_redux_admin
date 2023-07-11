const Welcome = ({ name, page }) => {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Welcome {name}!</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">{page}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
