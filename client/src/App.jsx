import { RouterProvider } from 'react-router-dom';
import router from './router/route';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoggedInUser } from './features/auth/authApiSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
