import { createBrowserRouter } from 'react-router-dom';
import publicRouter from './publicRoute';
import privateRouter from './privateRoute';

/**
 * create browser router
 */
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export router
export default router;
