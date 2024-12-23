import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorById } from "@/rtk/slices/doctorsSlice";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctors.doctor);
  const loading = useSelector((state) => state.doctors.loading);
  const error = useSelector((state) => state.doctors.error);

  useEffect(() => {
    if (doctorId) {
      dispatch(fetchDoctorById(doctorId));
    }
  }, [doctorId, dispatch]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!doctor) {
    return <div className="py-4 text-center">No doctor found!</div>;
  }

  const isDoctorAvailable = doctor.availability.length > 2;

  return (
    <div className="mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-xl">
      <div className="flex items-center space-x-6">
        <img
          src={doctor.image.url}
          alt={doctor.name}
          className="h-32 w-32 rounded-full border-4 border-indigo-600 object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.specialization}</p>
          <p className="mt-2 text-lg text-gray-600">Contact: {doctor.phone}</p>
          <p className="mt-2 text-lg text-gray-600">
            Status:{" "}
            <span
              className={`font-semibold ${isDoctorAvailable ? "text-green-500" : "text-red-500"}`}
            >
              {isDoctorAvailable ? "Available" : "Not Available"}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-50 p-6 shadow-inner">
        <h2 className="text-2xl font-semibold text-gray-800">
          About {doctor.name}
        </h2>
        <p className="mt-4 text-lg text-gray-700">{doctor.bio}</p>
      </div>

      <div className="mt-6">
        <button
          disabled={!isDoctorAvailable}
          className={`w-full rounded-lg px-4 py-3 text-lg transition ${isDoctorAvailable ? "bg-indigo-600 text-white hover:bg-indigo-700" : "cursor-not-allowed bg-gray-400 text-gray-300"}`}
        >
          <Link to={isDoctorAvailable ? "/appointmentForm" : "#"}>
            Book Appointment
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
