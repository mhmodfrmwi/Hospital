import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice"; // assuming the fetchDoctors action is created in doctorsSlice
import DoctorCard from "./DoctorCard";

const DoctorsToBook = () => {
  const dispatch = useDispatch();

  // Select the doctors state from the Redux store
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  // Dispatch the fetchDoctors action on component mount
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-7xl rounded-lg p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Top Doctors to Book
        </h1>
        <p className="text-gray-600">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Show loading indicator while data is being fetched */}
      {loading ? (
        <div className="text-center text-lg text-gray-600">
          Loading doctors...
        </div>
      ) : error ? (
        <div className="text-center text-lg text-red-600">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              image={doctor.image}
              isAvailable={doctor.isAvailable}
              name={doctor.name}
              apartment={doctor.specialty}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsToBook;
