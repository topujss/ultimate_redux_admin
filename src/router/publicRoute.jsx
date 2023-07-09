import Register from '../pages/auth/Register';
import Login from '../pages/auth/login';

/**
 * Create public router
 */
const publicRouter = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

// export router
export default publicRouter;
