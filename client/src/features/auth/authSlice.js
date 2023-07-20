import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './authApiSlice';

// create a auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: null,
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
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userData = action.payload.userData;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userData = null;
      });
  },
});

// selectors export

// actions export
export const { setMsgEmpty } = authSlice.actions;

// defaultly export reducers
export default authSlice.reducer;
