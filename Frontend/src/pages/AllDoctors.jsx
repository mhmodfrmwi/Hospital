import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@/rtk/slices/doctorsSlice";
import { Link } from "react-router-dom";
import DoctorCard from "@/components/ui/DoctorCard";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="mx-auto my-10 min-h-screen w-5/6 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Our Doctors
      </h1>

      {loading ? (
        <div className="text-center text-lg text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">Error: {error}</div>
      ) : doctors.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          No doctors available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-16 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Link key={doctor.id} to={`/${doctor.id}`}>
              <DoctorCard
                image={doctor.image}
                isAvailable={doctor.isAvailable}
                name={doctor.name}
                apartment={doctor.specialization}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDoctors;
