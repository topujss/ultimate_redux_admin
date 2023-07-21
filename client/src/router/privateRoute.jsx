import Layout from '../components/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
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
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
