import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async () => {
    const response = await fetch(
      "http://localhost:4000/api/rest/doctorsRoute/doctors",
    );
    const data = await response.json();
    return data.doctors;
  },
);

export const fetchDoctorById = createAsyncThunk(
  "doctors/fetchDoctorById",
  async (doctorId) => {
    const response = await fetch(
      `http://localhost:4000/api/rest/doctorsRoute/doctors/${doctorId}`,
    );
    const data = await response.json();
    return data.doctor;
  },
);

export const addDoctor = createAsyncThunk(
  "doctors/addDoctor",
  async (doctorData) => {
    const response = await fetch(
      "http://localhost:4000/api/rest/doctorsRoute/doctors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorData),
      },
    );
    const data = await response.json();
    return data;
  },
);

export const deleteDoctor = createAsyncThunk(
  "doctors/deleteDoctor",
  async (doctorId, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `http://localhost:4000/api/rest/doctorsRoute/doctors/${doctorId}`,
      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to delete doctor");
    }
    dispatch(fetchDoctors);
    return doctorId;
  },
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    doctor: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addDoctor.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors.push(action.payload);
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDoctorById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorById.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(fetchDoctorById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = state.doctors.filter(
          (doctor) => doctor.id !== action.payload,
        );
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
