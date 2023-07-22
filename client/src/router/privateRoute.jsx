import Layout from '../components/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/dashboard/Profile';
import User from '../pages/user/User';
import PrivateGard from './PrivateGard';

/**
 * Create private router
 */
const privateRouter = [
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: '/',
            element: <Dashboard />,
          },
          {
            path: '/user',
            element: <User />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
