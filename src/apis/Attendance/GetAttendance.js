import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies  from 'universal-cookie';

const initialState = {
  data: {},
  state: null,
  error: null,
  status: null,
  loading: false,
};

const api = "https://beep-beep-production.up.railway.app/user/attendance";
const cookies = new Cookies();
export const GetAttendance = createAsyncThunk(
  "GetAttendanceSlice/GetAttendance",
  async () => {
    try {
      const response = await axios.get(api, {headers: {authorization: `Bearer ${cookies.get("_auth_token")}`}});
      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        message: err.response.data.message,
        status: err.response.data.status,
      };
    }
  }
);

const GetAttendanceSlice = createSlice({
  name: "AttendanceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAttendance.fulfilled, (state, action) => {
      state.loading = true;
      if (action.payload.status === 404) {
        state.data = {};
        state.error = action.payload.message;
        state.status = action.payload.status;
        state.loading = false;
        state.state = "Error";
      } else if (action.payload.status === 200) {
        state.data = action.payload.data;
        state.error = null;
        state.status = action.payload.status;
        state.loading = false;
        state.state = "Success";
      } else {
        state.data = {};
        state.error = action.payload.message;
        state.status = action.payload.status;
        state.state = `Error ${action.payload.status}`;
      }
    });
    builder.addCase(GetAttendance.pending, (state) => {
      state.loading = true;
      state.data = {};
      state.error = null;
      state.state = "Pending";
      state.status = {};
    });
    builder.addCase(GetAttendance.rejected, (state) => {
      state.loading = false;
      state.data = {};
      state.error = "Server Error";
      state.status = "500";
      state.state = "Rejected";
    });
  },
});


export default GetAttendanceSlice.reducer;
