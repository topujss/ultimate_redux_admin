import Layout from '../components/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import User from '../pages/user/User';

/**
 * Create private router
 */
const privateRouter = [
  {
    element: <Layout />,
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
];

// export router
export default privateRouter;
