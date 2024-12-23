import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async () => {
    const res = await fetch(
      "http://localhost:4000/api/rest/appointmentsRoute/appointments",
    );
    if (!res.ok) {
      throw new Error("Failed to fetch appointments");
    }
    const data = await res.json();
    return data.appointments;
  },
);

export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (appointmentData, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/rest/appointmentsRoute/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to create appointment");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (appointmentId, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/rest/appointmentsRoute/appointments/${appointmentId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) {
        throw new Error("Failed to delete appointment");
      }

      const data = await res.json();
      dispatch(fetchAppointments());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments.push(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload,
        );
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;
