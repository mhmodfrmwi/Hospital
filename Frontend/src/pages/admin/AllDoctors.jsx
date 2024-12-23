import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";

const AllDoctors = () => {
  const dispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">
          All Doctors
        </h1>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-center text-lg text-red-500">Error: {error}</div>
        ) : doctors.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            No doctors available
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {doctor.name}
                    </h2>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    <p className="text-sm text-gray-400">
                      Contact: {doctor.contact}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() =>
                      console.log(`Viewing details for doctor ID: ${doctor.id}`)
                    }
                    className="text-blue-500 transition duration-200 hover:text-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDoctors;
