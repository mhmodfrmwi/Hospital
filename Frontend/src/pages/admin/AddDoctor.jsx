import { addDoctor } from "@/rtk/slices/doctorsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddDoctor = () => {
  const dispatch = useDispatch();
  const [doctorData, setDoctorData] = useState({
    name: "",
    specialty: "",
    image: "",
    contact: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !doctorData.name ||
      !doctorData.specialty ||
      !doctorData.image ||
      !doctorData.contact
    ) {
      setError("All fields are required.");
      return;
    }

    // Reset error message
    setError("");

    // Dispatch the addDoctor action
    dispatch(addDoctor(doctorData));

    // Clear form after submission
    setDoctorData({
      name: "",
      specialty: "",
      image: "",
      contact: "",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          Add New Doctor
        </h1>

        {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doctor's Full Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Specialty
            </label>
            <input
              type="text"
              name="specialty"
              value={doctorData.specialty}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doctor's Specialty"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={doctorData.image}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Image URL (Optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={doctorData.contact}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact Information"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
