import { configureStore } from "@reduxjs/toolkit";
import attendanceSlice from "./slices/attendanceSlice.js";
import authSlice from "./slices/userSlice.js";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    attendance: attendanceSlice
  }
});
