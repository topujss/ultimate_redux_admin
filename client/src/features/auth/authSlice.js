import { createSlice } from '@reduxjs/toolkit';
import { getLoggedInUser, loginUser, logoutUser, registerUser } from './authApiSlice';

// create a auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
    message: null,
    error: null,
  },
  reducers: {
    setMsgEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // register user start
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      // login user case start
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userData = action.payload.userData;
        localStorage.setItem('userData', JSON.stringify(action.payload.userData));
      })
      // logout user case start
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userData = null;
        localStorage.removeItem('userData');
      })
      // get loggedin user case start
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.userData = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

// selectors export
export const getAuthData = state => state.authStore

// actions export
export const { setMsgEmpty } = authSlice.actions;

// defaultly export reducers
export default authSlice.reducer;
