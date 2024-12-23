import { addDoctor } from "@/rtk/slices/doctorsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState({
    name: "",
    specialization: "",
    experience: "",
    email: "",
    phone: "",
    availability: [],
  });

  const [error, setError] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleAvailabilityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDoctorData((prev) => ({
        ...prev,
        availability: [...prev.availability, value],
      }));
    } else {
      setDoctorData((prev) => ({
        ...prev,
        availability: prev.availability.filter((day) => day !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !doctorData.name ||
      !doctorData.specialization ||
      !doctorData.experience ||
      !doctorData.email ||
      !doctorData.phone
    ) {
      setError("All fields except availability are required.");
      return;
    }

    setError("");

    dispatch(addDoctor(doctorData))
      .unwrap()
      .then((data) => {
        toast.success(data.message);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });

    setDoctorData({
      name: "",
      specialization: "",
      experience: "",
      email: "",
      phone: "",
      availability: [],
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
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={doctorData.specialization}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doctor's Specialization"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              value={doctorData.experience}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Years of Experience"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={doctorData.email}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doctor's Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={doctorData.phone}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doctor's Phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {daysOfWeek.map((day) => (
                <div key={day}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={day}
                      checked={doctorData.availability.includes(day)}
                      onChange={handleAvailabilityChange}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{day}</span>
                  </label>
                </div>
              ))}
            </div>
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
