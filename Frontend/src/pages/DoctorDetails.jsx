import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { doctorId } = useParams(); // Get doctorId from the URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch doctor details based on doctorId
    const fetchDoctor = async () => {
      const response = await fetch(`http://localhost:3000/doctors/${doctorId}`);
      const data = await response.json();
      setDoctor(data);
    };
    fetchDoctor();
  }, [doctorId]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
      <img
        src={doctor.image}
        alt={doctor.name}
        className="mt-4 h-64 w-full rounded-lg object-cover"
      />
      <p className="mt-4 text-lg text-gray-700">
        Specialization: {doctor.specialization}
      </p>
      <p className="mt-2 text-lg text-gray-700">Contact: {doctor.contact}</p>
      <p className="mt-2 text-lg text-gray-700">
        Status: {doctor.isAvailable ? "Available" : "Not Available"}
      </p>
    </div>
  );
};

export default DoctorDetails;
