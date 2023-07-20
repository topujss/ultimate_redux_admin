import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';

// create store for dashboard
const myStore = configureStore({
  reducer: {
    authStore: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// export my store
export default myStore;
