import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loginResponse: null,
  logoutResponse: null,
  loading: false,
  error: null
};

// ✅ Single Thunk for Both Attendance Login and Logout
export const updateAttendanceStatus = createAsyncThunk(
  "attendance/updateStatus",
  async ({ apiUrl, status, accessToken, timestamp }, thunkAPI) => {
    try {
      const payload = { status, timestamp };
      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      });
      return { status, data: response.data }; // Return status to know which one was updated
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAttendanceStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAttendanceStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { status, data } = action.payload;
        if (status === "login") {
          state.loginResponse = data;
        } else if (status === "logout") {
          state.logoutResponse = data;
        }
      })
      .addCase(updateAttendanceStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default attendanceSlice.reducer;
