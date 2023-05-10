import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  data: {},
  loading: false,
  state: null,
  status: null,
  error: null,
};

const api = "https://beep-beep-production.up.railway.app/user/location";

export const GetAllLocations = createAsyncThunk(
  "GetAllLocations/LocationsSlice",
  async () => {
    try {
      const response = await axios.get(api, {
        headers: { authorization: `Bearer ${cookies.get("_auth_token")}` },
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      return {
        message: error.response.data.message,
        status: error.response.status,
      };
    }
  }
);

const LocationSlice = createSlice({
  name: "LocationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllLocations.fulfilled, (state, action) => {
      if (action.payload.status === 403) {
        state.status = action.payload.status;
        state.data = {};
        state.error = action.payload.message;
        state.state = "Error";
        state.loading = false;
      } else if (action.payload.status === 200) {
        state.status = action.payload.status;
        state.data = action.payload.data;
        state.error = "";
        state.state = "Success";
        state.loading = false;
      } else {
        state.status = action.payload.status;
        state.data = {};
        state.error = action.payload.message;
        state.state = "Error";
        state.loading = false;
      }
    });
    builder.addCase(GetAllLocations.rejected, (state) => {
      state.data = {};
      state.error = "Server Error";
      state.status = 500;
      state.loading = false;
      state.state = "Rejected";
    });
    builder.addCase(GetAllLocations.pending, (state) => {
      state.loading = true;
      state.data = {};
      state.state = "Pending";
      state.status = "";
      state.error = "";
    });
  },
});


export default LocationSlice.reducer;
