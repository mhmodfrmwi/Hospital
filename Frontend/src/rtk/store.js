import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "./slices/appointmentSlice";
import doctorsSlice from "./slices/doctorsSlice";
import userSlice from "./slices/usersSlice";
export const store = configureStore({
  reducer: {
    appointments: appointmentSlice,
    doctors: doctorsSlice,
    users: userSlice,
  },
});
