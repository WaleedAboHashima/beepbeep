import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  state: null,
  error: null,
  status: null,
  loading: false,
};

const api = "https://beep-beep-production.up.railway.app/auth/login";

export const LoginHandler = createAsyncThunk(
  "LoginHandler/LoginSlice",
  async (arg) => {
    try {
      const response = await axios.post(api, {
        phone: arg.phone,
        password: arg.password,
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        message: err.response.data.message,
        status: err.response.status,
      };
    }
  }
);

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginHandler.fulfilled, (state, action) => {
      state.loading = true;
      if (action.payload.status === 403) {
        state.loading = false;
        state.data = {};
        state.state = "Error";
        state.error = action.payload.message;
        state.status = action.payload.status;
      } else if (action.payload.status === 200) {
        state.loading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
        state.error = null;
        state.state = "Success";
      }
      else {
        state.loading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
        state.state = "Error";
        state.data = {};
      }
    });
    builder.addCase(LoginHandler.rejected, (state) => {
      state.loading = false;
      state.state = "Rejected";
      state.error = "Server Rejected The Connection";
      state.status = 500;
    });
    builder.addCase(LoginHandler.pending, (state) => {
      state.loading = true;
      state.data = {};
      state.state = "Pending";
      state.status = null;
      state.error = null;
    });
  },
});


export default LoginSlice.reducer;
