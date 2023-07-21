import Forgot from '../pages/auth/Forgot';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/login';
import PublicGard from './publicGard';

/**
 * Create public router
 */
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgot',
        element: <Forgot />,
      },
    ],
  },
];

// export router
export default publicRouter;
