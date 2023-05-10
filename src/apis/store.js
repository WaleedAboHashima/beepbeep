import { configureStore } from "@reduxjs/toolkit";
import attendanceReducer from "./Attendance/GetAttendance";
import loginReducer from "./Auth/Login";
import locationReducer from "./Map/GetAllLocations"
export default configureStore({
  reducer: {
    GetAttendance: attendanceReducer,
    Login: loginReducer,
    Location: locationReducer
  },
});
