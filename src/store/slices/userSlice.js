import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  signupResponse: null,
  signinResponse: null
};
// ✅ Thunk for Signup
export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ signupApi, userData }, thunkAPI) => {
    try {
      const response = await axios.post(signupApi, userData, {
        headers: { "Content-Type": "application/json" }
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

// ✅ Thunk for Signin
export const signinUser = createAsyncThunk(
  "auth/signin",
  async ({ signinApi, credentials }, thunkAPI, accessToken) => {
    try {
      const response = await axios.post(signinApi, credentials, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}` // ✅ Include token
        }
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signin failed"
      );
    }
  }
);
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async ({ getUserApi, accessToken }, thunkAPI) => {
    try {
      const response = await axios.get(getUserApi, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Data fetch failed"
      );
    }
  }
);

// ✅ Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    // ✅ Signup Cases
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signupResponse = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ✅ Signin Cases
    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signinResponse = action.payload;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ✅ get logged in user Cases
    builder
      .addCase(getLoggedInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.signinResponse = action.payload;
        state.user = action.payload.user;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout, setUser, clearUser } = authSlice.actions; // ✅ Extract actions
export default authSlice.reducer;
