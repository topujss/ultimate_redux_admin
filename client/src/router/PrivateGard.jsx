import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateGard = () => {
  const { userData } = useSelector((state) => state.authStore);

  return userData ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateGard;
