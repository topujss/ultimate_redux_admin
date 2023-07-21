import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicGard = () => {
  const { userData } = useSelector((state) => state.authStore);

  return userData ? <Navigate to={'/'} /> : <Outlet />;
};

export default PublicGard;

// import React from 'react'

// const PublicGard = () => {
//   return (
//     <div>PublicGard</div>
//   )
// }

// export default PublicGard